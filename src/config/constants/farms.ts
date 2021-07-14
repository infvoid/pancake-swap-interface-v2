import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'HD',
    lpAddresses: {
      128: '0xA161658ad97F70915136B773beecb72Cde221F31',
      256: '',
    },
    token: tokens.hd,
    quoteToken: tokens.husd,
  },
  {
    pid: 1,
    lpSymbol: 'HD-USDT LP',
    lpAddresses: {
      128: '0xCBB9263a6074904905089e753f4084EAEFe16405',
      256: '',
    },
    token: tokens.hd,
    quoteToken: tokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'HD-HUSD LP',
    lpAddresses: {
      128: '0x085D8cc74230440591073c298117AFF1aAc54D6e',
      256: '',
    },
    token: tokens.hd,
    quoteToken: tokens.husd,
  },
  {
    pid: 3,
    lpSymbol: 'HD-HDT LP',
    lpAddresses: {
      128: '0xfc718634DB3e0d178c291De69F27E0AB9D32ca07',
      256: '',
    },
    token: tokens.hdt,
    quoteToken: tokens.hd,
  },
  {
    pid: 4,
    lpSymbol: 'HD-ETH LP',
    lpAddresses: {
      128: '0x2c7eA16f81986a04B3A3Aa9f95631733D3d07cFd',
      256: '',
    },
    token: tokens.eth,
    quoteToken: tokens.hd,
  },
  {
    pid: 5,
    lpSymbol: 'HD-HT LP',
    lpAddresses: {
      128: '0x8F593038Ab8F85bc68DE3F3D7982E9199898EF13',
      256: '',
    },
    token: tokens.wht,
    quoteToken: tokens.hd,
  },
  {
    pid: 6,
    lpSymbol: 'HD-HPT LP',
    lpAddresses: {
      128: '0x397d53b4F599D456Ea09734BdFe93D35A2c20050',
      256: '',
    },
    token: tokens.hpt,
    quoteToken: tokens.hd,
  },
  {
    pid: 7,
    lpSymbol: 'HD-BOO LP',
    lpAddresses: {
      128: '0x0B357bf28B57800E73fF4da867b09930cBaddc85',
      256: '',
    },
    token: tokens.boo,
    quoteToken: tokens.hd,
  },
  {
    pid: 8,
    lpSymbol: 'HD-MDX LP',
    lpAddresses: {
      128: '0x761D5B3240E54bD4Cda18b8f7ffa5B9bc2A820A8',
      256: '',
    },
    token: tokens.mdx,
    quoteToken: tokens.hd,
  },
  {
    pid: 9,
    lpSymbol: 'HD-HDOT LP',
    lpAddresses: {
      128: '0x67C821ad2b76Eb0482191Bc182A9D3db420Df230',
      256: '',
    },
    token: tokens.hdot,
    quoteToken: tokens.hd,
  },
]

export default farms
