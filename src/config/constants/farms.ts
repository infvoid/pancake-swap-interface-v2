import tokens from './tokens'
import { FarmCategory, FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'IT',
    lpAddresses: {
      230505: '0xaC2af16818E171c461Ab103cB6284cC4e64b2b87',
    },
    token: tokens.hd,
    quoteToken: tokens.hd,
    farmCategory: FarmCategory.IT,
  },
  {
    pid: 1,
    lpSymbol: 'IT-LKEA LP',
    lpAddresses: {
      230505: '0x3ee8a40440e917c78cf38954eda9a39861443954',
    },
    token: tokens.hd,
    quoteToken: tokens.wht,
    farmCategory: FarmCategory.IT,
  },
]

export default farms
