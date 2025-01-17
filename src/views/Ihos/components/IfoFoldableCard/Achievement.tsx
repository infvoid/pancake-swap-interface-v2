import React from 'react'
import styled from 'styled-components'
import { Flex, LinkExternal, Image, Text, PrizeIcon, Skeleton } from '@pancakeswap-libs/uikit'
import { useTranslation } from 'hooks/useI18n'
import { PublicIfoData } from 'views/Ihos/types'
import { Ifo } from 'config/constants/types'
import { BIG_TEN } from 'utils/bigNumber'
// import { getBscScanAddressUrl } from 'utils/bscscan'

const MIN_DOLLAR_FOR_ACHIEVEMENT = BIG_TEN

interface Props {
  ifo: Ifo
  publicIfoData: PublicIfoData
}

const Container = styled(Flex)`
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    align-items: initial;
  }
`

const AchievementFlex = styled(Flex)<{ isFinished: boolean }>`
  ${({ isFinished }) => (isFinished ? 'filter: grayscale(100%)' : '')};
`

const StyledLinkExternal = styled(LinkExternal)`
  font-size: 12px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 0;
  }
`

const Achievement: React.FC<Props> = ({ ifo, publicIfoData }) => {
  const { t } = useTranslation()
  const tokenName = ifo.token.symbol.toLowerCase()
  const campaignTitle = ifo.name
  const minLpForAchievement = MIN_DOLLAR_FOR_ACHIEVEMENT.div(publicIfoData.currencyPriceInUSD).toNumber()

  return (
    <Container>
      <AchievementFlex isFinished={publicIfoData.status === 'finished'} alignItems="center" flexGrow={1}>
        <Image src={`/images/achievements/ifo-${tokenName}.svg`} width={56} height={56} mr="8px" />
        <Flex flexDirection="column">
          <Text color="secondary" fontSize="12px">
            {`${t('Achievement')}:`}
          </Text>
          <Flex>
            <Text bold mr="8px" color="#010033">
              {t('IHO Shopper: %title%', { title: campaignTitle })}
            </Text>
          </Flex>
          {publicIfoData.currencyPriceInUSD.gt(0) ? (
            <Text color="textSubtle" fontSize="12px">
              {t('Commit ~%amount% LP in total to earn!', { amount: minLpForAchievement.toFixed(3) })}
            </Text>
          ) : (
            <Skeleton minHeight={18} width={80} />
          )}
        </Flex>
      </AchievementFlex>
      <Flex alignItems="flex-end" flexDirection="column">
        <Flex alignItems="center" mr="8px" mb="8px">
          <PrizeIcon color="textSubtle" width="16px" mr="4px" />
          <Text color="textSubtle" mr="5px">
            {publicIfoData.numberPoints}
          </Text>
          <StyledLinkExternal color="textSubtle" href={ifo.articleUrl}>
            {t('Learn more about %title%', { title: campaignTitle })}
          </StyledLinkExternal>
        </Flex>
        {/* <StyledLinkExternal href={getBscScanAddressUrl(ifo.address)}>{t('View Contract')}</StyledLinkExternal> */}
      </Flex>
    </Container>
  )
}

export default Achievement
