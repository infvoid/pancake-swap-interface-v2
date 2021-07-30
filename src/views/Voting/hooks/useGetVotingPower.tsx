import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { BIG_ZERO } from 'utils/bigNumber'
import { simpleRpcProvider } from 'utils/providers'
import BigNumber from 'bignumber.js'
import { getVotingPower } from '../helpers'

interface State {
  total: BigNumber
}

const initialState: State = {
  total: BIG_ZERO,
}

const useGetVotingPower = (block?: number, isActive = true): State & { isLoading: boolean } => {
  const { account } = useWeb3React()
  const [votingPower, setVotingPower] = useState(initialState)
  const [isLoading, setIsLoading] = useState(!!account)

  useEffect(() => {
    const fetchVotingPower = async () => {
      setIsLoading(true)

      try {
        const blockNumber = block || (await simpleRpcProvider.getBlockNumber())
        const { total } = await getVotingPower(account, [], blockNumber)

        if (isActive) {
          setVotingPower((prevVotingPower) => ({
            ...prevVotingPower,
            total: new BigNumber(total),
          }))
        }
      } finally {
        setIsLoading(false)
      }
    }

    if (account && isActive) {
      fetchVotingPower()
    }
  }, [account, block, setVotingPower, isActive, setIsLoading])

  return { ...votingPower, isLoading }
}

export default useGetVotingPower
