import { Column } from '@tanstack/react-table'

import React from 'react'
import styled from 'styled-components'

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

const HeaderLink = styled.div`
  padding-right: 12px;
  display: inline-block;
  position: relative;
`
export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <HeaderLink className={className}>{title}</HeaderLink>
  }
  return <HeaderLink className={className}>{title}</HeaderLink>
}
