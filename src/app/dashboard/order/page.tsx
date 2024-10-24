'use client'

import React from 'react'

import { Column } from 'react-table'
import Link from 'next/link'
import Row from '@/components/atoms/row'
import Card from '@/components/molecules/card'
import DataTableHeading from '@/components/molecules/datatable/data-table-heading'
import DataTable from '@/components/molecules/datatable'
import Badge from '@/components/atoms/badge'
import Pagination from '@/components/atoms/pagination'

interface DataRow {
  status: string
  code: string
  firstName: string
  lastName: string
  date: string
  shippingFee: number
  count: number
  price: number
}
const columns: Column<DataRow>[] = [
  {
    Header: <a>ステータス</a>,
    accessor: 'status',
    Cell: ({ value }) => {
      return <Badge>{value}</Badge>
    },
    width: '100px',
    maxWidth: 100,
  },
  {
    Header: <a>BS注文コード</a>,
    accessor: 'code',
  },
  {
    Header: <a>注文者</a>,
    accessor: 'price',
    width: '300px',
    maxWidth: 300,
    Cell: (row) => {
      return (
        <div style={{ textAlign: 'left', width: '300px' }}>
          <Link href="/dashboard/order/view" style={{ fontWeight: 'bold' }}>
            {row.row.original.firstName} {row.row.original.lastName}
          </Link>
          <div>
            <span style={{ display: 'inline-block', marginRight: '15px' }}>
              送料：¥{row.row.original.shippingFee}
            </span>
            <span style={{ display: 'inline-block', marginRight: '15px' }}>
              支払い金額：¥{row.row.original.price}
            </span>
            <span style={{ display: 'inline-block' }}>
              数量：{row.row.original.count}
            </span>
          </div>
        </div>
      )
    },
  },
  {
    Header: <a>注文日</a>,
    accessor: 'date',
  },
]

// Sample data
const data: DataRow[] = [
  {
    status: 'ステータス',
    firstName: '名字',
    lastName: '名前',
    code: '0000000000',
    date: '2024/01/20',
    shippingFee: 210,
    count: 2,
    price: 188110,
  },
  {
    status: 'ステータス',
    firstName: '名字',
    lastName: '名前',
    code: '0000000000',
    date: '2024/01/20',
    shippingFee: 210,
    count: 2,
    price: 188110,
  },
  {
    status: 'ステータス',
    firstName: '名字',
    lastName: '名前',
    code: '0000000000',
    date: '2024/01/20',
    shippingFee: 210,
    count: 2,
    price: 188110,
  },
  {
    status: 'ステータス',
    firstName: '名字',
    lastName: '名前',
    code: '0000000000',
    date: '2024/01/20',
    shippingFee: 210,
    count: 2,
    price: 188110,
  },
  {
    status: 'ステータス',
    firstName: '名字',
    lastName: '名前',
    code: '0000000000',
    date: '2024/01/20',
    shippingFee: 210,
    count: 2,
    price: 188110,
  },
  {
    status: 'ステータス',
    firstName: '名字',
    lastName: '名前',
    code: '0000000000',
    date: '2024/01/20',
    shippingFee: 210,
    count: 2,
    price: 188110,
  },
  {
    status: 'ステータス',
    firstName: '名字',
    lastName: '名前',
    code: '0000000000',
    date: '2024/01/20',
    shippingFee: 210,
    count: 2,
    price: 188110,
  },
  {
    status: 'ステータス',
    firstName: '名字',
    lastName: '名前',
    code: '0000000000',
    date: '2024/01/20',
    shippingFee: 210,
    count: 2,
    price: 188110,
  },
]

export default function Home() {
  return (
    <>
      <Row>
        <Card size={12} type="box">
          <DataTableHeading size="heading2">注文一覧</DataTableHeading>
          <DataTable columns={columns} data={data} />
          <div style={{ width: '100%', padding: '15px' }}>
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <Pagination
                currentPage={1}
                totalPages={5}
                onPageChange={() => {}}
                size="large"
              ></Pagination>
            </div>
          </div>
        </Card>
      </Row>
    </>
  )
}
