import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Card, Text, Skeleton, CardHeader, Box } from '@pancakeswap-libs/uikit'
import { useTranslation } from 'hooks/useI18n'
import { useLottery } from 'state/lottery/hooks'
import { fetchLottery } from 'state/lottery/helpers'
import { LotteryStatus } from 'config/constants/types'
import RoundSwitcher from './RoundSwitcher'
import { getDrawnDate, processLotteryResponse } from '../../helpers'
import PreviousRoundCardBody from '../PreviousRoundCard/Body'
import PreviousRoundCardFooter from '../PreviousRoundCard/Footer'

const StyledCard = styled(Card)`
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 756px;
  }
`

const StyledCardHeader = styled(CardHeader)`
  z-index: 2;
  background: none;
  border-bottom: 1px ${({ theme }) => theme.colors.cardBorder} solid;
`

const YourHistoryCard = () => {
  const { t } = useTranslation()
  const {
    currentLotteryId,
    currentRound: { status, isLoading },
  } = useLottery()
  const currentLotteryIdAsInt = parseInt(currentLotteryId)
  const mostRecentFinishedRoundId =
    status === LotteryStatus.CLAIMABLE ? currentLotteryIdAsInt : currentLotteryIdAsInt - 1
  const [selectedRoundId, setSelectedRoundId] = useState(mostRecentFinishedRoundId.toString())
  const [selectedLotteryInfo, setSelectedLotteryInfo] = useState(null)
  const timer = useRef(null)

  useEffect(() => {
    setSelectedLotteryInfo(null)

    const fetchLotteryData = async () => {
      const lotteryData = await fetchLottery(selectedRoundId)
      const processedLotteryData = processLotteryResponse(lotteryData)
      setSelectedLotteryInfo(processedLotteryData)
    }

    timer.current = setInterval(() => {
      if (selectedRoundId) {
        fetchLotteryData()
      }
      clearInterval(timer.current)
    }, 1000)

    return () => clearInterval(timer.current)
  }, [selectedRoundId])

  const handleInputChange = (event) => {
    const {
      target: { value },
    } = event
    if (value) {
      setSelectedRoundId(value)
      if (parseInt(value, 10) <= 0) {
        setSelectedRoundId('')
      }
      if (parseInt(value, 10) >= mostRecentFinishedRoundId) {
        setSelectedRoundId(mostRecentFinishedRoundId.toString())
      }
    } else {
      setSelectedRoundId('')
    }
  }

  const handleArrowButonPress = (targetRound) => {
    if (targetRound) {
      setSelectedRoundId(targetRound.toString())
    } else {
      // targetRound is NaN when the input is empty, the only button press that will trigger this func is 'forward one'
      setSelectedRoundId('1')
    }
  }

  return (
    <StyledCard>
      <StyledCardHeader>
        <RoundSwitcher
          isLoading={isLoading}
          selectedRoundId={selectedRoundId}
          mostRecentRound={mostRecentFinishedRoundId}
          handleInputChange={handleInputChange}
          handleArrowButonPress={handleArrowButonPress}
        />
        <Box mt="8px">
          {selectedLotteryInfo?.endTime ? (
            <Text fontSize="14px">
              {t('Drawn')} {getDrawnDate(selectedLotteryInfo.endTime)}
            </Text>
          ) : (
            <Skeleton width="185px" height="21px" />
          )}
        </Box>
      </StyledCardHeader>
      <PreviousRoundCardBody lotteryData={selectedLotteryInfo} lotteryId={selectedRoundId} />
      <PreviousRoundCardFooter lotteryData={selectedLotteryInfo} lotteryId={selectedRoundId} />
    </StyledCard>
  )
}

export default YourHistoryCard
