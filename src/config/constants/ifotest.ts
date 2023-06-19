import tokens from './tokens'
import farms from './farms'

const cakeBnbLpToken = {
  symbol: farms[1].lpSymbol,
  address: farms[1].lpAddresses,
  decimals: 18,
}

const ifostest = [
  {
    id: 'dst',
    address: '0xd6227696cBf30767DEFAd7866a6587b3158c2C08',
    isActive: true,
    name: 'Defi-Starter（DST）',
    poolBasic: {
      saleAmount: '375,000 DST',
      raiseAmount: '$750,000',
      cakeToBurn: '$375,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '875,000 DST',
      raiseAmount: '$2,500,000',
      cakeToBurn: '$1,250,000',
      distributionRatio: 0.7,
    },
    currency: cakeBnbLpToken,
    token: tokens.dst,
    releaseBlockNumber: 6566572,
    campaignId: '111110000',
    articleUrl: '#',
    tokenOfferingPrice: 2.0,
    version: 2,
  },
]

export default ifostest
