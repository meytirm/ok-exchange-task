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
