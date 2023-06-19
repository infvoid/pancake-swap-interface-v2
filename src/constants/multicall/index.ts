import { ChainId } from '@pancakeswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xB141ad5863bb9c4413d3f7b6B1ABd01b853369ae',
  [ChainId.TESTNET]: '0xB141ad5863bb9c4413d3f7b6B1ABd01b853369ae' // TODO
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
