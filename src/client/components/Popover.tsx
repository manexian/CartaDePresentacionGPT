import { type User} from "wasp/entities";
import { generateEdit, useQuery, getUserInfo } from "wasp/client/operations";
import { VStack, ButtonGroup, Button, ButtonGroupProps, Text, Box, useDisclosure } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { TextareaContext } from '../App';
import { LeaveATip } from './AlertDialog';
//import LnPaymentModal from './LnPaymentModal';
//import { fetchLightningInvoice } from '../lightningUtils';
//import type { LightningInvoice } from '../lightningUtils';

interface EditPopoverProps extends ButtonGroupProps {
  selectedText?: string;
  setTooltip: any;
  user: Omit<User, 'password'>;
}

export function EditPopover({ setTooltip, selectedText, user, ...props }: EditPopoverProps) {
  const { textareaState, setTextareaState } = useContext(TextareaContext);
  const { data: userInfo } = useQuery(getUserInfo, { id: user.id });
  const { isOpen: isPayOpen, onOpen: onPayOpen, onClose: onPayClose } = useDisclosure();

  const replaceSelectedText = async ({ improvement }: { improvement: string }) => {
    const selection = window.getSelection();
    let loadingInterval: NodeJS.Timeout | undefined;

    try {
      const value = textareaState;
      const selectString = selection!.toString();
      const index = value.indexOf(selectString);

      let loadingString = 'Loading';
      loadingInterval = setInterval(() => {
        if (loadingString.length < 'Loading...'.length) {
          loadingString += '.';
          let loading =
            value.slice(0, index + selectString.length) +
            '\n --- \n' +
            loadingString +
            '\n --- \n' +
            value.slice(index + selectString.length);
          setTextareaState(loading);
        } else {
          loadingString = 'Loading';
        }
      }, 750);

      const payload = { content: selectString, improvement };
      const newValue = await generateEdit(payload);

      clearInterval(loadingInterval);
      setTextareaState(value);

      const newText =
        value.slice(0, index + selectString.length) +
        '\n --- Revision: \n' +
        newValue +
        '\n --- \n' +
        value.slice(index + selectString.length);

      setTextareaState(newText);
    } catch (error: any) {
      console.error(error);
      if (loadingInterval) clearInterval(loadingInterval);
      alert(error?.message ?? 'An error has occurred');
    }
  };

  const handleClick = async (value: string) => {
    if (!userInfo?.credits && !userInfo?.hasPaid) {
      onPayOpen();
      setTooltip(null);
      window.getSelection()?.removeAllRanges();
      return;
    }

    replaceSelectedText({ improvement: value });
    window.getSelection()?.removeAllRanges();
  };

  return (
    <>
      <VStack {...props} gap={1} bgColor='bg-modal' borderRadius='lg' boxShadow='2xl'>
        <Box layerStyle='cardLg' p={3}>
          <Text fontSize='sm' textAlign='center'>
            🤔 Ask GPT to make this part more..
          </Text>
          <ButtonGroup size='xs' p={1} variant='solid' colorScheme='purple' isAttached>
            <Button size='xs' color='black' fontSize='xs' onClick={() => handleClick('concise')}>
              Concise
            </Button>

            <Button size='xs' color='black' fontSize='xs' onClick={() => handleClick('detailed')}>
              Detailed
            </Button>

            <Button size='xs' color='black' fontSize='xs' onClick={() => handleClick('Professional')}>
              Professional
            </Button>

            <Button size='xs' color='black' fontSize='xs' onClick={() => handleClick('informal')}>
              Informal
            </Button>
          </ButtonGroup>
        </Box>
      </VStack>
      <LeaveATip
        isOpen={isPayOpen}
        onOpen={onPayOpen}
        onClose={onPayClose}
        credits={userInfo?.credits || 0}
      />
    </>
  );
}
