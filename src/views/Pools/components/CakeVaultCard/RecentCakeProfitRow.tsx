import React from 'react'
import { Flex, Text } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'hooks/useI18n'
import { useCakeVault, usePriceCakeBusd } from 'state/hooks'
import { getCakeVaultEarnings } from 'views/Pools/helpers'
import RecentCakeProfitBalance from './RecentCakeProfitBalance'

const RecentCakeProfitCountdownRow = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    pricePerFullShare,
    userData: { cakeAtLastUserAction, userShares, lastUserActionTime },
  } = useCakeVault()
  const cakePriceBusd = usePriceCakeBusd()
  const { hasAutoEarnings, autoCakeToDisplay, autoUsdToDisplay } = getCakeVaultEarnings(
    account,
    cakeAtLastUserAction,
    userShares,
    pricePerFullShare,
    cakePriceBusd.toNumber(),
  )

  const lastActionInMs = lastUserActionTime && parseInt(lastUserActionTime) * 1000
  const dateTimeLastAction = new Date(lastActionInMs)
  const dateStringToDisplay = dateTimeLastAction.toLocaleString()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="14px">{`${t('Recent HD profit')}:`}</Text>
      {hasAutoEarnings && (
        <RecentCakeProfitBalance
          cakeToDisplay={autoCakeToDisplay}
          dollarValueToDisplay={autoUsdToDisplay}
          dateStringToDisplay={dateStringToDisplay}
        />
      )}
    </Flex>
  )
}

export default RecentCakeProfitCountdownRow
