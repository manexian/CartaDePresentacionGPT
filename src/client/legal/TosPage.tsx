import BorderBox from '../components/BorderBox';
import { useEffect } from 'react';
import LegalSection from './components/legalSection';
import { legalTranslations } from '../translations/translations';
import { 
  Heading, 
  Text, 
  VStack, 
  UnorderedList, 
  ListItem, 
  Link,
  Box
} from '@chakra-ui/react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BorderBox>
      <VStack maxW='4xl' mx='auto' p={6} spacing={6} align='flex-start'>
        <Heading as='h1' size='xl' mb={6}>{legalTranslations.termsOfService}</Heading>
        <Text fontSize='sm' color='gray.600' mb={6}>{legalTranslations.lastUpdated} {new Date().toLocaleDateString()}</Text>

        <LegalSection title={legalTranslations.companyInfo}>
          <Text>
            {legalTranslations.companyName}
            <br />
            {legalTranslations.companyAddress}
            <br />
            {legalTranslations.companyEmail}
            <br />
            {legalTranslations.companyPartners}
          </Text>
        </LegalSection>

        <LegalSection title={legalTranslations.serviceDescription}>
          <Text>
            {legalTranslations.serviceDescriptionText}
          </Text>
        </LegalSection>

        <LegalSection title={legalTranslations.contractFormation}>
          <Text>{legalTranslations.contractFormationText}</Text>
        </LegalSection>

        <LegalSection title={legalTranslations.userAccount}>
          <Text>{legalTranslations.userAccountDataProtectionText}</Text>
        </LegalSection>

        <LegalSection title={legalTranslations.pricesPaymentTerms}>
          <Text>
            {legalTranslations.pricesText}
          </Text>
          <UnorderedList mt={2} spacing={2} pl={5}>
            <ListItem>
              {legalTranslations.pricesConversionText}
            </ListItem>
            <ListItem>
              {legalTranslations.pricesVariationText}
            </ListItem>
            <ListItem>
              {legalTranslations.vatText}
            </ListItem>
            <ListItem>
              {legalTranslations.additionalTaxesText}
            </ListItem>
          </UnorderedList>
        </LegalSection>

        <LegalSection title={legalTranslations.rightWithdrawalWithdrawalForm}>
          <VStack spacing={6} align='stretch'>
            <Box>
              <Text>
                {legalTranslations.withdrawalText}
              </Text>
              
              <Text mt={4}>
                {legalTranslations.withdrawalInstructions}
              </Text>

              <Text mt={4}>
                {legalTranslations.withdrawalDeadline}
              </Text>

              <Text mt={4}>
                {legalTranslations.withdrawalEffects}
              </Text>
            </Box>

            <Box p={4} borderWidth={1} borderRadius='lg' bg='bg-contrast-sm'>
              <Text fontWeight='semibold' mb={4}>
                {legalTranslations.modelWithdrawalForm}
              </Text>
              <Text mb={4}>
                {legalTranslations.withdrawalFormInstructions}
              </Text>
              <VStack align='stretch' spacing={4} color='text-contrast-lg'>
                <Box>
                  <Text fontWeight='medium'>{legalTranslations.withdrawalTo}:</Text>
                  <Text>{legalTranslations.companyName}</Text>
                  <Text>{legalTranslations.companyAddress}</Text>
                  <Text>{legalTranslations.companyEmail}</Text>
                </Box>

                <Text>
                  {legalTranslations.withdrawalNotice}
                </Text>

                <UnorderedList spacing={2} pl={4}>
                  <ListItem>{legalTranslations.withdrawalOrdered}</ListItem>
                  <ListItem>{legalTranslations.withdrawalName}</ListItem>
                  <ListItem>{legalTranslations.withdrawalAddress}</ListItem>
                  <ListItem>{legalTranslations.withdrawalSignature}</ListItem>
                  <ListItem>{legalTranslations.withdrawalDate}</ListItem>
                </UnorderedList>

                <Text fontSize='sm' fontStyle='italic'>
                  {legalTranslations.withdrawalDelete}
                </Text>
              </VStack>
            </Box>

            <Text fontSize='sm' color='gray.600'>
              {legalTranslations.withdrawalAlternative}
            </Text>
          </VStack>
        </LegalSection>

        <LegalSection title={legalTranslations.disputeResolution}>
          <Text>
            {legalTranslations.disputeResolutionText}
          </Text>
        </LegalSection>

        <LegalSection title={legalTranslations.governingLaw}>
          <Text>{legalTranslations.governingLawText}</Text>
        </LegalSection>

        <LegalSection title={legalTranslations.serviceUsageLimitations}>
          <Text>
            {legalTranslations.serviceUsageText}
          </Text>
          <UnorderedList spacing={2} pl={5}>
            <ListItem>
              {legalTranslations.servicePurposeText}
            </ListItem>
            <ListItem>
              {legalTranslations.useAdviceText}
            </ListItem>
            <ListItem>
              {legalTranslations.serviceLimitText}
            </ListItem>
            <ListItem>
              {legalTranslations.accountConfidentialityText}
            </ListItem>
          </UnorderedList>
        </LegalSection>

        <LegalSection title={legalTranslations.disclaimerLiability}>
          <Text>
            {legalTranslations.disclaimerText}
          </Text>
          <UnorderedList spacing={2} pl={5}>
            <ListItem>
              {legalTranslations.coverLetterText}
            </ListItem>
            <ListItem>
              {legalTranslations.liabilityContentText}
            </ListItem>
            <ListItem>
              {legalTranslations.userResponsibilityText}
            </ListItem>
            <ListItem>
              {legalTranslations.consequencesText}
              <UnorderedList mt={2} pl={5}>
                <ListItem>{legalTranslations.missedOpportunities}</ListItem>
                <ListItem>{legalTranslations.rejectedApplications}</ListItem>
                <ListItem>{legalTranslations.reputationImpact}</ListItem>
                <ListItem>{legalTranslations.lossIncome}</ListItem>
                <ListItem>{legalTranslations.misrepresentation}</ListItem>
                <ListItem>{legalTranslations.technicalErrors}</ListItem>
                <ListItem>{legalTranslations.dataLoss}</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              {legalTranslations.aiContentText}
            </ListItem>
            <ListItem>
              {legalTranslations.serviceCompatibilityText}
            </ListItem>
            <ListItem>
              {legalTranslations.totalLiabilityText}
            </ListItem>
            <ListItem>
              {legalTranslations.jurisdictionText}
            </ListItem>
          </UnorderedList>
          <Text mt={4} fontWeight='semibold'>
            {legalTranslations.acceptanceText}
          </Text>
        </LegalSection>

        <LegalSection title={legalTranslations.intellectualProperty}>
          <UnorderedList spacing={2} pl={5}>
            <ListItem>
              {legalTranslations.servicePropertyText}
            </ListItem>
            <ListItem>
              {legalTranslations.userInformationText}
            </ListItem>
            <ListItem>
              {legalTranslations.contentUsageText}
            </ListItem>
          </UnorderedList>
        </LegalSection>

        <LegalSection title={legalTranslations.security}>
          <Text>
            {legalTranslations.paymentText}
          </Text>
          <UnorderedList spacing={2} pl={5}>
            <ListItem>
              {legalTranslations.paymentStorageText}
            </ListItem>
            <ListItem>
              {legalTranslations.paymentEncryptionText}
            </ListItem>
            <ListItem>
              {legalTranslations.stripeSecurityText}
              <Link 
                href="https://stripe.com/docs/security" 
                target="_blank" 
                rel="noopener noreferrer"
                color="purple.600"
                _hover={{ color: 'purple.800' }}
                ml={1}
              >
                {legalTranslations.stripeSecurityLink}
              </Link>
            </ListItem>
          </UnorderedList>
        </LegalSection>
      </VStack>
    </BorderBox>
  );
};

export default TermsOfService;
