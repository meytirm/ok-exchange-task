import type React from 'react'

export interface TopHeaderNavigationMenu {
  label: string
  href?: string
  children?:
  {
    title: string
    link: string
    icon: React.ReactNode
    subtitle?: string
  }[]

}

export interface CryptoPrice {
  symbol: string
  name: string
  title: string
  isHot: boolean
  price: number
  count: number
  profit: number
}

export interface CryptoIcons {
  [key: string]: string
}

export interface AccordionItem { title: string, content: string }

export interface MenuChild {
  title: string
  href: string
}

export interface FooterMenu {
  title: string
  children: MenuChild[]
}
