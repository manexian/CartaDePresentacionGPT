import { useAuth } from 'wasp/client/auth';
import { getUserInfo, updateUser, stripePayment, stripeGpt4Payment, stripeCreditsPayment, useQuery } from 'wasp/client/operations';
import {
  VStack,
  Heading,
  Text,
  Code,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Switch,
  RadioGroup,
  Radio,
  Stack,
} from '@chakra-ui/react';
import BorderBox from './components/BorderBox';
import { useState, ChangeEvent } from 'react';

export default function Profile() {
  const { data: user } = useAuth();
  const { data: userInfo } = useQuery(getUserInfo, { id: user?.id || 0 });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGpt4Loading, setIsGpt4Loading] = useState<boolean>(false);
  const [isCreditsLoading, setIsCreditsLoading] = useState<boolean>(false);


  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const { sessionUrl } = await stripePayment();
      if (sessionUrl) window.location.href = sessionUrl;
    } catch (error: any) {
      console.error(error);
      alert(error?.message ?? 'Something went wrong');
    }
    setIsLoading(false);
  };

  const handleGpt4Payment = async () => {
    setIsGpt4Loading(true);
    try {
      const { sessionUrl } = await stripeGpt4Payment();
      if (sessionUrl) window.location.href = sessionUrl;

    } catch (error: any) {
      console.error(error);
      alert(error?.message ?? 'Something went wrong');
    }
    setIsGpt4Loading(false);
  };

  const handleCreditsPayment = async () => {
    setIsCreditsLoading(true);
    try {
      const { sessionUrl } = await stripeCreditsPayment();
      if (sessionUrl) window.location.href = sessionUrl;
    } catch (error: any) {
      console.error(error);
      alert(error?.message ?? 'Something went wrong');
    }
    setIsCreditsLoading(false);
  };

  const handleGptModelChange = async (value: string) => {
    try {
      await updateUser({ gptModel: value });
    } catch (error: any) {
      console.error(error);
      alert(error?.message ?? 'Something went wrong');
    }
  };

  const handleNotifyChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      await updateUser({ notifyPaymentExpires: e.target.checked });
    } catch (error: any) {
      console.error(error);
      alert(error?.message ?? 'Something went wrong');
    }
  };

  if (!userInfo) {
    return null;
  }

  return (
    
    <BorderBox>
      <VStack alignItems='flex-start' gap={3}>
        <Heading size='md'>Profile</Heading>
        <Text>
          Email: <Code>{userInfo.email}</Code>
        </Text>
        <Text>
          Credits: <Code>{userInfo.credits}</Code>
        </Text>
        {userInfo.hasPaid && (
          <>
            <Text>
              Subscription Status: <Code>{userInfo.subscriptionStatus}</Code>
            </Text>
            <FormControl display='flex' alignItems='center'>
              <FormLabel htmlFor='notify' mb='0'>
                Notify me when my subscription is about to expire
              </FormLabel>
              <Switch
                id='notify'
                isChecked={userInfo.notifyPaymentExpires}
                onChange={handleNotifyChange}
              />
            </FormControl>
          </>
        )}
        {userInfo.hasGpt4Access && (
          <FormControl>
            <FormLabel>GPT Model</FormLabel>
            <RadioGroup defaultValue={userInfo.gptModel} onChange={handleGptModelChange}>
              <Stack spacing={5} direction='row'>
                <Radio value='gpt-4o-mini'>GPT-4 Mini</Radio>
                <Radio value='gpt-4o'>GPT-4</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        )}
        <ButtonGroup>
          {!userInfo.hasPaid && (
            <Button isLoading={isLoading} onClick={handlePayment}>
              💰 Subscribe for $2.95/mo
            </Button>
          )}
          {!userInfo.hasGpt4Access && (
            <Button isLoading={isGpt4Loading} onClick={handleGpt4Payment}>
              🧠 Upgrade to GPT-4 for $4.95/mo
            </Button>
          )}
          {!userInfo.hasPaid && (
            <Button isLoading={isCreditsLoading} onClick={handleCreditsPayment}>
              💳 Buy 10 Credits for $4.95
            </Button>
          )}
        </ButtonGroup>
      </VStack>
    </BorderBox>
  );
}
