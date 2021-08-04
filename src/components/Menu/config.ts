import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Dashboard',
    icon: 'Dashboard',
    href: '/Dashboard',
  },
  {
    label: 'Exchange HUB',
    icon: 'ExchangeHUB',
    items: [
      {
        label: 'Bridge',
        href: 'https://bridge.poly.network/',
      },
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Stake HUB',
    icon: 'StakeHUB',
    items: [
      {
        label: 'Yield Farming',
        href: '/farms',
      },
      {
        label: 'Community Pool',
        href: '/Pools',
      },
    ],
  },
  {
    label: 'Start-up HUB',
    icon: 'StartUpHUB',
    items: [
      {
        label: 'IHO',
        href: '/IHO',
      },
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: 'Prediction HUB',
    icon: 'PredictionHUB',
    items: [
      {
        label: 'Lottery',
        href: '/Lottery',
      },
    ],
  },
  {
    label: 'Vote',
    icon: 'Vote',
    href: '/voting',
  },
  {
    label: 'Analytics',
    icon: 'Analytics',
    href: 'https://info.hubdao.io',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/hub-dao',
      },
      {
        label: 'Docs',
        href: 'https://docs.hubdao.io/',
      },
      {
        label: 'Blog',
        href: 'https://hub-dao.medium.com/',
      },
    ],
  },
]

export default config
