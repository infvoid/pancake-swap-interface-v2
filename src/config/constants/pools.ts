import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.hd,
    earningToken: tokens.hd,
    contractAddress: {
      256: '',
      128: '0xa74dac913ac8bD36b8ce3ddde210882329F3d96E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.05',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
