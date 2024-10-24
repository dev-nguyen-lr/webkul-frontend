import React from 'react'
import {
  useTable,
  Column,
  TableInstance,
  HeaderGroup,
  Row,
  Cell,
} from 'react-table'
import styled from 'styled-components'

// Styled Components
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`

const Th = styled.th`
  padding: 15px 10px;
  white-space: nowrap;
  vertical-align: top;
  text-align: center;
  position: relative;
  display: table-cell !important;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 70%;
    background: #eee;
    position: absolute;
    top: 15%;
    right: 0;
  }
`

const Td = styled.td`
  padding: 10px 10px;
  vertical-align: top;
  text-align: center;
  position: relative;
  display: table-cell !important;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 70%;
    background: #eee;
    position: absolute;
    top: 15%;
    right: 0;
  }
`

const Tr = styled.tr`
  border-bottom: 1px solid #eee;
  transition: 0.2s;
`

// Define the row type

// Define the props interface
interface DataTableProps<T extends object> {
  columns: Column<T>[]
  data: T[]
}

const DataTable = <T extends object>({ columns, data }: DataTableProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  }: TableInstance<T> = useTable({
    columns,
    data,
  })

  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup: HeaderGroup<T>, index: number) => (
          <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, colIndex) => (
              <Th {...column.getHeaderProps()} key={colIndex}>
                {column.render('Header')}
              </Th>
            ))}
          </Tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: Row<T>, rowIndex: number) => {
          prepareRow(row)
          return (
            <Tr {...row.getRowProps()} key={rowIndex}>
              {row.cells.map((cell: Cell<T>, cellIndex: number) => (
                <Td {...cell.getCellProps()} key={cellIndex}>
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default DataTable
