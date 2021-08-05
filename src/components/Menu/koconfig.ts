import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: '대시보드',
    icon: 'Dashboard',
    href: '/Dashboard',
  },
  {
    label: '교환 허브',
    icon: 'ExchangeHUB',
    items: [
      {
        label: '체인변환',
        href: 'https://bridge.poly.network/',
      },
      {
        label: '교환',
        href: '/swap',
      },
      {
        label: '유동성',
        href: '/pool',
      },
    ],
  },
  {
    label: '스테이킹 허브',
    icon: 'StakeHUB',
    items: [
      {
        label: '이자농사',
        href: '/farms',
      },
      {
        label: '커뮤니티 풀',
        href: '/Pools',
      },
    ],
  },
  {
    label: '스타트업 허브',
    icon: 'StartUpHUB',
    items: [
      {
        label: 'IHO',
        href: '/IHO',
      },
      {
        label: '리더보드',
        href: '/teams',
      },
      {
        label: '내 프로필',
        href: '/profile',
      },
    ],
  },
  {
    label: '예측 허브',
    icon: 'PredictionHUB',
    items: [
      {
        label: '복권',
        href: '/Lottery',
      },
    ],
  },
  {
    label: '투표',
    icon: 'Vote',
    href: '/voting',
  },
  {
    label: '분석',
    icon: 'Analytics',
    href: 'https://info.hubdao.io',
  },
  {
    label: '더보기',
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
