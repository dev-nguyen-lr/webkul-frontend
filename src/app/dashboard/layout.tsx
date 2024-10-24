import { ReactNode } from 'react'
import HeaderAndSidebar from '@/components/templates/header-and-sidebar'

import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Beauty Scandal Pro',
  description: 'Generated by create next app',
}

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return <HeaderAndSidebar>{children}</HeaderAndSidebar>
}
