import React from 'react'
import { Box, StyleButton, Text, Heading, WritingIcon, Flex } from '@pancakeswap-libs/uikit'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'hooks/useI18n'
import Container from 'components/layout/Container'

const StyledFooter = styled(Box)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum2};
  padding-bottom: 32px;
  padding-top: 32px;
`

const Footer = () => {
  const { t } = useTranslation()

  return (
    <StyledFooter>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Box pr="32px">
            <Heading as="h2" scale="lg" mb="16px">
              {t('Do you have any suggestions?')}
            </Heading>
            <Text as="p">
              {t(
                'Voting is a good way to see what ideas others have and are thinking.The proposal succeeded in voting.Even so, it does not reflect immediately.'
              )}
            </Text>
            <Text as="p" mb="16px">
              {t('But a proposal that has received a lot of votes could be a key proposition.')}
            </Text>
            <StyleButton
              startIcon={<WritingIcon color="currentColor" width="24px" />}
              as={Link}
              to="/voting/proposal/create"
            >
              {t('Make a Proposal')}
            </StyleButton>
          </Box>
        </Flex>
      </Container>
    </StyledFooter>
  )
}

export default Footer
