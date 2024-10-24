import * as React from 'react'
import styled from 'styled-components'

interface PropsWithChildren {
  children: React.ReactNode
}
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`
const StyledTableHeader = styled.thead`
  display: flex;
`
const StyledTableRow = styled.tr`
  border-bottom: 1px solid #eee;
  transition: 0.2s;
`
const StyledTableCell = styled.td`
  padding: 15px 10px;
  white-space: nowrap;
`

const StyledTableBody = styled.tbody`
  display: block;
`

const Table: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledTable>{children}</StyledTable>
)

const TableHeader: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledTableHeader>{children}</StyledTableHeader>
)
const TableRow: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledTableRow>{children}</StyledTableRow>
)
const TableCell: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledTableCell>{children}</StyledTableCell>
)
const TableBody: React.FC<PropsWithChildren> = ({ children }) => (
  <StyledTableBody>{children}</StyledTableBody>
)

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot ref={ref} className={className} {...props} />
))
TableFooter.displayName = 'TableFooter'

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th ref={ref} className={className} {...props} {...props} />
))
TableHead.displayName = 'TableHead'

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption ref={ref} className={className} {...props} />
))
TableCaption.displayName = 'TableCaption'

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
