import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { FarmCategory } from 'config/constants/types'
import { useAppDispatch } from 'state'
import { updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, sousStake, sousStakeBnb } from 'utils/callHelpers'
import { useMasterchef, useSousChef } from './useContract2'

const useStake = (pid: number) => {
  let farmCategory
  if (pid > 10000 && pid < 20000) {
    farmCategory = FarmCategory.HDT
    pid -= 10000
  } else if (pid > 20000 && pid < 30000) {
    farmCategory = FarmCategory.BKC
    pid -= 20000
  } else {
    farmCategory = FarmCategory.HD
  }

  const { account } = useWeb3React()
  const masterChefContract = useMasterchef(farmCategory)

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(masterChefContract, pid, amount, account)
      console.info(txHash)
    },
    [account, masterChefContract, pid],
  )

  return { onStake: handleStake }
}

export const useSousStake = (sousId: number, isUsingBnb = false) => {
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const masterChefContract = useMasterchef(FarmCategory.HD)
  const hdtChefContract = useMasterchef(FarmCategory.HDT)
  const sousChefContract = useSousChef(sousId)

  const handleStake = useCallback(
    async (amount: string, decimals: number) => {
      if (sousId === 0) {
        await stake(masterChefContract, 0, amount, account)
      } else if (sousId === 1) {
        await stake(hdtChefContract, 0, amount, account)
      } else if (isUsingBnb) {
        await sousStakeBnb(sousChefContract, amount, account)
      } else {
        await sousStake(sousChefContract, amount, decimals, account)
      }
      dispatch(updateUserStakedBalance(sousId, account))
      dispatch(updateUserBalance(sousId, account))
    },
    [account, dispatch, isUsingBnb, masterChefContract, hdtChefContract, sousChefContract, sousId],
  )

  return { onStake: handleStake }
}

export default useStake
