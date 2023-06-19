import tokens from './tokens'
import farms from './farms'

const cakeBnbLpToken = {
  symbol: farms[1].lpSymbol,
  address: farms[1].lpAddresses,
  decimals: 18,
}

const ifos = [
  {
    id: 'ot1',
    address: '0xa3D8B2e0d23f173F41B70f91eC88370E584dA172',
    isActive: true,
    name: 'Offering Token(OT1)',
    poolBasic: {
      saleAmount: '375,000 OT1',
      raiseAmount: '$750,000',
      cakeToBurn: '$375,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '875,000 OT1',
      raiseAmount: '$2,500,000',
      cakeToBurn: '$1,250,000',
      distributionRatio: 0.7,
    },
    currency: cakeBnbLpToken,
    token: tokens.ot1,
    releaseBlockNumber: 6566572,
    campaignId: '111110000',
    articleUrl: '#',
    tokenOfferingPrice: 2.0,
    version: 2,
  },
]


export default ifos
