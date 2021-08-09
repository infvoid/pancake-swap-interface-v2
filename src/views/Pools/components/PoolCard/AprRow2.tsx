import React from 'react'
import Balance from 'components/Balance'
import { Pool } from 'state/types'
import { getAprData } from 'views/Pools/helpers'

interface AprRowProps {
  pool: Pool
  performanceFee?: number
}

const AprRow: React.FC<AprRowProps> = ({ pool, performanceFee = 0 }) => {
  const { isFinished } = pool
  const { apr: earningsPercentageToDisplay } = getAprData(pool, performanceFee)

  return (
    <Balance
      fontSize="16px"
      color="#fff"
      isDisabled={isFinished}
      value={earningsPercentageToDisplay}
      decimals={2}
      unit="%"
      bold
    />
  )
}

export default AprRow
