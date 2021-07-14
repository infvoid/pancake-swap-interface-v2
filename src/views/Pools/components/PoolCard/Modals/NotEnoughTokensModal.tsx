import React from 'react'
import { useTranslation } from 'hooks/useI18n'
import styled from 'styled-components'
import { Modal, Text, Button, OpenNewIcon, Link } from '@pancakeswap-libs/uikit'
import { BASE_EXCHANGE_URL } from 'config'
import useTheme from 'hooks/useTheme'

interface NotEnoughTokensModalProps {
    tokenSymbol: string
    onDismiss?: () => void
}

const StyledLink = styled(Link)`
  width: 100%;
`

const NotEnoughTokensModal: React.FC<NotEnoughTokensModalProps> = ({ tokenSymbol, onDismiss }) => {
    const { t } = useTranslation()
    const { theme } = useTheme()

    return (
        <Modal
            title={t('%symbol% required',)}
            onDismiss={onDismiss}
            headerBackground={theme.colors.gradients.cardHeader}
        >
            <Text color="failure" bold>
                {t('Insufficient %symbol% balance')}
            </Text>
            <Text mt="24px">{t('You’ll need %symbol% to stake in this pool!')}</Text>
            <Text>
                {t('Buy some %symbol%, or make sure your %symbol% isn’t in another pool or LP.',)}
            </Text>
            <Button mt="24px" as="a" external href={BASE_EXCHANGE_URL}>
                {t('Buy')} {tokenSymbol}
            </Button>
            <StyledLink href="https://yieldwatch.net" external>
                <Button variant="secondary" mt="8px" width="100%">
                    {t('Locate Assets')}
                    <OpenNewIcon color="primary" ml="4px" />
                </Button>
            </StyledLink>
            <Button variant="text" onClick={onDismiss}>
                {t('Close Window')}
            </Button>
        </Modal>
    )
}

export default NotEnoughTokensModal