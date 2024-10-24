import { ReactNode } from 'react'
import { Metadata } from 'next'

export type AppRouterPageProps<
  T extends Record<string, string | string[] | never> = Record<string, never>,
> = {
  params: T
  searchParams: { [key: string]: string | string[] | undefined }
}

/**
 *
 * @example app/dashboard/[team]/layout.tsx /dashboard/1 AppRouterLayoutProps<{team: string}>
 * @example app/shop/[tag]/[item]/layout.js	/shop/1/2	<{tag: string,item:string}>
 * @example app/blog/[...slug]/layout.js	/blog/1/2	{ slug: string[] }
 *
 */
export type AppRouterLayoutProps<
  T extends Record<string, string | string[] | never> = Record<string, never>,
> = {
  children: ReactNode
  params: T
}

export type AppRouterErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

const DEFAULT_TITLE = ''
const DEFAULT_DESCRIPTION = ''

export const generateMetaData = (meta?: Metadata): Metadata => {
  const { title, description, applicationName, ...rest } = meta ?? {}
  return {
    ...rest,
    title: title ? `${title}` : DEFAULT_TITLE,
    description: description
      ? `${description} - ${DEFAULT_DESCRIPTION}`
      : DEFAULT_DESCRIPTION,
    applicationName: applicationName ?? DEFAULT_TITLE,
  }
}
