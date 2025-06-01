import { VStack, HStack, Text, Link, Divider } from '@chakra-ui/react';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { Link as WaspLink } from 'wasp/client/router';

export function Footer() {
  return (
    <VStack width='full' py={5} textAlign='center' gap={4}>
      <Divider />
      <VStack gap={3}>
        <Link href='https://github.com/vincanger/coverlettergpt' color='purple.300' target='_blank'>
          <HStack justify='center'>
            <FaGithub />
            <Text fontSize='sm' color='purple.300'>
              Hecho con Wasp y 100% de código abierto. Gracias @vincanger :heart:
            </Text>
          </HStack>
        </Link>
/*
        <Link href='https://twitter.com/hot_town' target='_blank' color='purple.300'>
          <HStack justify='center'>
            <FaTwitter />
            <Text fontSize='sm' color='purple.300'>
              Follow me on Txitter
            </Text>
          </HStack>
        </Link>
        */
        <WaspLink to='/tos'>
          <Text fontSize='sm' color='purple.300'>
            Términos de Servicio
          </Text>
        </WaspLink>
        <WaspLink to='/privacy'>
          <Text fontSize='sm' color='purple.300'>
            Política de Privacidad
          </Text>
        </WaspLink>
      </VStack>
    </VStack>
  );
}
