import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'hooks/useI18n'
import { VotingBox, ModalInner } from './styles'

interface DetailsViewProps {
  total: BigNumber
}

const DetailsView: React.FC<DetailsViewProps> = ({
  total,
}) => {
  const { t } = useTranslation()

  return (
    <ModalInner>
      <Text as="p" mb="24px" fontSize="14px" color="textSubtle">
        {t(
          'Your voting power is determined by the amount of HD you held at the block detailed below. HD held in other places does not contribute to your voting power.'
        )}
      </Text>
      <Text color="secondary" textTransform="uppercase" mb="4px" bold fontSize="14px">
        {t('Overview')}
      </Text>
      <VotingBox>
        <Text color="secondary">{t('Your Voting Power')}</Text>
        <Text bold fontSize="20px">
          {total.toFormat(3)}
        </Text>
      </VotingBox>
      <Text color="secondary" textTransform="uppercase" mb="4px" bold fontSize="14px">
        {t('Your HD Held Now')}
      </Text>
    </ModalInner>
  )
}

export default DetailsView
