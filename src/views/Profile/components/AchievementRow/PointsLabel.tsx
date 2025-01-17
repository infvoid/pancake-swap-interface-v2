import React from 'react'
import { Flex, FlexProps, PrizeIcon, Text } from '@pancakeswap-libs/uikit'
import { useTranslation } from 'hooks/useI18n'

interface PointsLabelProps extends FlexProps {
  points: number
  px?: any
  mb?: any
}

const PointsLabel: React.FC<PointsLabelProps> = ({ points, ...props }) => {
  const { t } = useTranslation()
  const localePoints = points.toLocaleString()

  return (
    <Flex alignItems="center" {...props}>
      <PrizeIcon mr="4px" color="textSubtle" />
      <Text color="textSubtle">{t('%num% points', { num: localePoints })}</Text>
    </Flex>
  )
}

export default PointsLabel
