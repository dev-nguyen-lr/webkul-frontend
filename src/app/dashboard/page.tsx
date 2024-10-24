'use client'

import React from 'react'

import { Column } from 'react-table'
import Link from 'next/link'
import Row from '@/components/atoms/row'
import Card from '@/components/molecules/card'
import MultiCardRow from '@/components/molecules/multi-card-row'
import Heading from '@/components/atoms/heading'
import DataTableHeading from '@/components/molecules/datatable/data-table-heading'
import Icon from '@/components/atoms/icon'
import DataTable from '@/components/molecules/datatable'
import Badge from '@/components/atoms/badge'

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
          <Link href="/order/view">
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
      <MultiCardRow>
        <Card size={4} type="tile">
          <Icon>
            <span
              className="material-symbols-outlined"
              style={{ color: '#5da2c6;' }}
            >
              point_of_sale
            </span>
          </Icon>
          <div style={{ width: 'calc(100% - 80px);' }}>
            <Heading size="heading3">
              <p style={{ color: '#999', lineHeight: '1.4' }}>注文商品数</p>
            </Heading>
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '3rem',
                lineHeight: '1.4',
              }}
            >
              0,000,000<span style={{ fontSize: '1.6rem' }}>点</span>
            </p>
          </div>
        </Card>

        <Card size={4} type="tile">
          <Icon>
            <span
              className="material-symbols-outlined"
              style={{ color: '#f0915e;' }}
            >
              receipt_long
            </span>
          </Icon>
          <div style={{ width: 'calc(100% - 80px);' }}>
            <Heading size="heading3">
              <p style={{ color: '#999', lineHeight: '1.4' }}>注文数</p>
            </Heading>
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '3rem',
                lineHeight: '1.4',
              }}
            >
              0,000<span style={{ fontSize: '1.6rem' }}>件</span>
            </p>
          </div>
        </Card>

        <Card size={4} type="tile">
          <Icon>
            <span
              className="material-symbols-outlined"
              style={{ color: '#6e39d9;' }}
            >
              health_and_beauty
            </span>
          </Icon>
          <div style={{ width: 'calc(100% - 80px);' }}>
            <Heading size="heading3">
              <p style={{ color: '#999', lineHeight: '1.4' }}>注文商品数</p>
            </Heading>
            <p
              style={{
                fontWeight: 'bold',
                fontSize: '3rem',
                lineHeight: '1.4',
              }}
            >
              0,000,000<span style={{ fontSize: '1.6rem' }}>点</span>
            </p>
          </div>
        </Card>
      </MultiCardRow>
      <Row>
        <Card size={12} type="box">
          <DataTableHeading size="heading2" link="/order">
            注文一覧
          </DataTableHeading>
          <DataTable columns={columns} data={data} />
        </Card>
      </Row>
    </>
  )
}
