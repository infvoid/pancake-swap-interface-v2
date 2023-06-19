import { ChainId } from '@pancakeswap/sdk'
import addresses from 'config/constants/contracts'
import tokens from 'config/constants/tokens'
import { Address } from 'config/constants/types'

export const getAddress = (address: Address): string => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[ChainId.MAINNET]
}

export const getCakeAddress = () => {
  return getAddress(tokens.cake.address)
}
export const getMasterChefAddress = () => {
  return "";
  // return getAddress(addresses.masterChef)
}
export const getHdtChefAddress = () => {
  return "";
  // return getAddress(addresses.hdtChef)
}
export const getBkcChefAddress = () => {
  return "";
  // return getAddress(addresses.bkcChef)
}
export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}
export const getWbnbAddress = () => {
  return getAddress(tokens.wbnb.address)
}
export const getLotteryAddress = () => {
  return "";
  // return getAddress(addresses.lottery)
}
export const getLotteryTicketAddress = () => {
  return "";
  // return getAddress(addresses.lotteryNFT)
}
export const getLotteryV2Address = () => {
  return "";
  // return getAddress(addresses.lotteryV2)
}
export const getPancakeProfileAddress = () => {
  return getAddress(addresses.pancakeProfile)
}
export const getPancakeRabbitsAddress = () => {
  return getAddress(addresses.pancakeRabbits)
}
export const getBunnyFactoryAddress = () => {
  return getAddress(addresses.bunnyFactory)
}
export const getClaimRefundAddress = () => {
  return getAddress(addresses.claimRefund)
}
export const getPointCenterIfoAddress = () => {
  return "";
  // return getAddress(addresses.pointCenterIfo)
}
export const getBunnySpecialAddress = () => {
  return "";
  // return getAddress(addresses.bunnySpecial)
}
export const getTradingCompetitionAddress = () => {
  return "";
  // return getAddress(addresses.tradingCompetition)
}
export const getEasterNftAddress = () => {
  return "";
  // return getAddress(addresses.easterNft)
}
export const getCakeVaultAddress = () => {
  return "";
  // return getAddress(addresses.cakeVault)
}
export const getPredictionsAddress = () => {
  return "";
  // return getAddress(addresses.predictions)
}
export const getChainlinkOracleAddress = () => {
  return "";
  // return getAddress(addresses.chainlinkOracle)
}
export const getBunnySpecialCakeVaultAddress = () => {
  return "";
  // return getAddress(addresses.bunnySpecialCakeVault)
}
export const getBunnySpecialPredictionAddress = () => {
  return "";
  // return getAddress(addresses.bunnySpecialPrediction)
}
