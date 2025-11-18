import Futures from '@/assets/icons/web_futures.svg'
import Convert from '@/assets/icons/web_convert.svg'
import Trade from '@/assets/icons/web_trade.svg'
import type { TopHeaderNavigationMenu } from '~~/types'

export const topHeaderNavigationMenu: TopHeaderNavigationMenu[] = [
  {
    label: 'Start Crypto Trading',
    children: [
      {
        title: 'Futures',
        link: '#',
        icon: Futures,
        subtitle: 'Contracts settled in cryptocurrency',
      },
      {
        title: 'Spot',
        link: '#',
        icon: Trade,
        subtitle: 'Buy and sell by advanced tools',
      },
      {
        title: 'Convert',
        link: '#',
        icon: Convert,
        subtitle: 'The easiest way to trade at all sizes ',
      },

    ],
  },
  {
    label: 'cryptocurrency Overview',
    children: [
      {
        title: 'Bitcoin Price',
        icon: Futures,
        link: '#',
      },
      {
        title: 'Altcoin price',
        icon: Convert,
        link: '#',
      },
      {
        title: 'Meme price',
        icon: Trade,
        link: '#',
      },
      {
        title: 'Top gainers/losers',
        icon: Trade,
        link: '#',
      },
      {
        title: 'New listings',
        icon: Trade,
        link: '#',
      },
    ],
  },
  {
    label: 'Buy Crypto',
    children: [
      {
        title: 'Buy bitcoin',
        link: '#',
        icon: Futures,
      },
      {
        title: 'Buy etheruem',
        link: '#',
        icon: Convert,
      },
      {
        title: 'Buy memecoins',
        link: '#',
        icon: Trade,
      },
      {
        title: 'buy ai tokens',
        link: '#',
        icon: Trade,
      },
      {
        title: 'Sell crypto',
        link: '#',
        icon: Trade,
      },
    ],
  },
  {
    label: 'Earn',
    href: '#',
  },
  {
    label: 'Info',
    children: [
      {
        title: 'About us',
        link: '#',
        icon: Futures,
      },
      {
        title: 'Fees',
        link: '#',
        icon: Convert,
      },
      {
        title: 'Security',
        link: '#',
        icon: Trade,
      },
    ],
  },
]
