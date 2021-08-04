import React from 'react'
import styled from 'styled-components'
import { ifosConfig, ifostestConfig } from 'config/constants'
import useGetPublicIfoV2Data from 'views/Ihos/hooks/v2/useGetPublicIfoData'
import useGetWalletIfoV2Data from 'views/Ihos/hooks/v2/useGetWalletIfoData'
// import IfoFoldableCard from './components/IfoFoldableCard'
import IfoFoldableCardtest from './components/IfoFoldableCardtest'
import IfoLayout from './components/IfoLayout'
import IfoSteps from './components/IfoSteps'

/**
 * Note: currently there should be only 1 active IHO at a time
 */
const activeIfo = ifosConfig.find((ifo) => ifo.isActive)
const activeIfotest = ifostestConfig.find((ifo) => ifo.isActive)

const StyleIfoLayout = styled(IfoLayout)`
  @media screen and (max-width: 800px) {
    padding: 0;
    padding-bottom: 40px;
  }
`

const Ifo = () => {
  // const publicIfoData = useGetPublicIfoV2Data(activeIfo)
  const publicIfotestData = useGetPublicIfoV2Data(activeIfotest)
  const walletIfoData = useGetWalletIfoV2Data(activeIfo)
  const walletIfotestData = useGetWalletIfoV2Data(activeIfotest)

  return (
    <StyleIfoLayout>
      {/* <IfoFoldableCard ifo={activeIfo} publicIfoData={publicIfoData} walletIfoData={walletIfoData} isInitiallyVisible /> */}
      <IfoFoldableCardtest
        ifo={activeIfotest}
        publicIfoData={publicIfotestData}
        walletIfoData={walletIfotestData}
        isInitiallyVisible
      />
      <IfoSteps ifo={activeIfo} walletIfoData={walletIfoData} />
    </StyleIfoLayout>
  )
}

export default Ifo
