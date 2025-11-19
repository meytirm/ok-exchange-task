import type { CryptoIcons, CryptoPrice } from '~~/types'
import BTC from '@/assets/icons/currencies/BTC.svg'
import ETH from '@/assets/icons/currencies/ETH.svg'
import CAR from '@/assets/icons/currencies/CAR.svg'
import ACE from '~/assets/icons/currencies/ACE.svg'
import SOl from '@/assets/icons/currencies/SOL.svg'

export const cryptoPricesList: CryptoPrice[] = [{
  symbol: 'BTC',
  name: 'Bitcoin',
  title: 'BTC/USDT',
  isHot: true,
  price: 117540000,
  count: 25.45,
  profit: 15.5,
},
{
  symbol: 'ETH',
  name: 'Etherium',
  title: 'ETH/USDT',
  isHot: true,
  price: 117540000,
  count: 25.45,
  profit: -15.5,
},
{
  symbol: 'CAR',
  name: 'Cardano',
  title: 'CAR/USDT',
  isHot: true,
  price: 117540000,
  count: 25.45,
  profit: -15.5,
},
{
  symbol: 'SOL',
  name: 'Solana',
  title: 'SOL/USDT',
  isHot: false,
  price: 117540000,
  count: 25.45,
  profit: 15.5,
},
{
  symbol: 'ACE',
  name: 'Fusionist',
  title: 'ACE/USDT',
  isHot: false,
  price: 117540000,
  count: 25.45,
  profit: -15.5,
},
{
  symbol: 'ACE',
  name: 'Fusionist',
  title: 'ACE/USDT',
  isHot: false,
  price: 117540000,
  count: 25.45,
  profit: -15.5,
},
{
  symbol: 'ACE',
  name: 'Fusionist',
  title: 'ACE/USDT',
  isHot: false,
  price: 117540000,
  count: 25.45,
  profit: 15.5,
},
{
  symbol: 'SOL',
  name: 'Solana',
  title: 'SOL/USDT',
  isHot: false,
  price: 117540000,
  count: 25.45,
  profit: 15.5,
}]

export const cryptoIcons: CryptoIcons = {
  BTC: BTC,
  ACE: ACE,
  ETH: ETH,
  CAR: CAR,
  SOL: SOl,
}
