'use client'

import React from 'react'

import { Column } from 'react-table'
import Link from 'next/link'
import Image from 'next/image'
import Row from '@/components/atoms/row'
import Card from '@/components/molecules/card'
import DataTableHeading from '@/components/molecules/datatable/data-table-heading'
import DataTable from '@/components/molecules/datatable'
import FormRow from '@/components/molecules/form-row'

interface DataRow {
  image: string
  name: string
  link: string
  brand: string
  price: number
  stock: number
  totalprice: number
}
const columns: Column<DataRow>[] = [
  {
    Header: '画像',
    accessor: 'image',
    Cell: (row) => {
      return (
        <Link href={row.row.original.link}>
          <Image
            src={row.row.original.image}
            width={130}
            height={130}
            alt={row.row.original.name}
          />
        </Link>
      )
    },
    width: '100px',
    maxWidth: 100,
  },
  {
    Header: 'アイテム',
    accessor: 'brand',
    Cell: (row) => {
      return (
        <div
          style={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>
            <Link href={row.row.original.link} style={{ fontWeight: 'bold' }}>
              {row.row.original.name}
            </Link>
          </div>
          <p>{row.row.original.brand}</p>
          <p style={{ marginTop: '5px' }}>
            ¥{row.row.original.price}
            <span
              style={{ fontSize: '1.2rem', color: '#999', paddingLeft: '5px' }}
            >
              税込 / 数量：{row.row.original.stock}
            </span>
          </p>
        </div>
      )
    },
    width: '100px',
    maxWidth: 100,
  },
  {
    Header: '小計',
    accessor: 'totalprice',
    Cell: (row) => {
      return (
        <div style={{ textAlign: 'right' }}>¥{row.row.original.totalprice}</div>
      )
    },
    width: '100px',
    maxWidth: 100,
  },
]

// Sample data
const data: DataRow[] = [
  {
    image:
      'https://beauty-scandal.jp/cdn/shop/files/Soie_4595316698134_C_b_32554_42da0b30-1b86-412b-bc22-c9e6057a4a9d_300x300.jpg?v=1728345400',
    name: 'エンライトハンドセラム エレガントタイム',
    link: 'https://beauty-scandal.jp/products/%E3%82%A8%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%88%E3%83%8F%E3%83%B3%E3%83%89%E3%82%BB%E3%83%A9%E3%83%A0-%E3%82%A8%E3%83%AC%E3%82%AC%E3%83%B3%E3%83%88%E3%82%BF%E3%82%A4%E3%83%A0',
    brand: 'Soie',
    price: 4800,
    stock: 2,
    totalprice: 9600,
  },
  {
    image:
      'https://beauty-scandal.jp/cdn/shop/files/Soie_4595316698134_C_b_32554_42da0b30-1b86-412b-bc22-c9e6057a4a9d_300x300.jpg?v=1728345400',
    name: 'エンライトハンドセラム エレガントタイム',
    link: 'https://beauty-scandal.jp/products/%E3%82%A8%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%88%E3%83%8F%E3%83%B3%E3%83%89%E3%82%BB%E3%83%A9%E3%83%A0-%E3%82%A8%E3%83%AC%E3%82%AC%E3%83%B3%E3%83%88%E3%82%BF%E3%82%A4%E3%83%A0',
    brand: 'Soie',
    price: 4800,
    stock: 2,
    totalprice: 9600,
  },
  {
    image:
      'https://beauty-scandal.jp/cdn/shop/files/Soie_4595316698134_C_b_32554_42da0b30-1b86-412b-bc22-c9e6057a4a9d_300x300.jpg?v=1728345400',
    name: 'エンライトハンドセラム エレガントタイム',
    link: 'https://beauty-scandal.jp/products/%E3%82%A8%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%88%E3%83%8F%E3%83%B3%E3%83%89%E3%82%BB%E3%83%A9%E3%83%A0-%E3%82%A8%E3%83%AC%E3%82%AC%E3%83%B3%E3%83%88%E3%82%BF%E3%82%A4%E3%83%A0',
    brand: 'Soie',
    price: 4800,
    stock: 2,
    totalprice: 9600,
  },
  {
    image:
      'https://beauty-scandal.jp/cdn/shop/files/Soie_4595316698134_C_b_32554_42da0b30-1b86-412b-bc22-c9e6057a4a9d_300x300.jpg?v=1728345400',
    name: 'エンライトハンドセラム エレガントタイム',
    link: 'https://beauty-scandal.jp/products/%E3%82%A8%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%88%E3%83%8F%E3%83%B3%E3%83%89%E3%82%BB%E3%83%A9%E3%83%A0-%E3%82%A8%E3%83%AC%E3%82%AC%E3%83%B3%E3%83%88%E3%82%BF%E3%82%A4%E3%83%A0',
    brand: 'Soie',
    price: 4800,
    stock: 2,
    totalprice: 9600,
  },
  {
    image:
      'https://beauty-scandal.jp/cdn/shop/files/Soie_4595316698134_C_b_32554_42da0b30-1b86-412b-bc22-c9e6057a4a9d_300x300.jpg?v=1728345400',
    name: 'エンライトハンドセラム エレガントタイム',
    link: 'https://beauty-scandal.jp/products/%E3%82%A8%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%88%E3%83%8F%E3%83%B3%E3%83%89%E3%82%BB%E3%83%A9%E3%83%A0-%E3%82%A8%E3%83%AC%E3%82%AC%E3%83%B3%E3%83%88%E3%82%BF%E3%82%A4%E3%83%A0',
    brand: 'Soie',
    price: 4800,
    stock: 2,
    totalprice: 9600,
  },
]

export default function Home() {
  return (
    <>
      <Row>
        <Card size={12} type="box">
          <FormRow title="BS注文コード" isFirstRow={true}>
            <input
              type="text"
              name=""
              value="0000000000"
              readOnly
              inputMode="numeric"
            />
          </FormRow>
          <FormRow title="注文日">
            <input
              type="text"
              name=""
              value="2024/01/20/15:00"
              readOnly
              inputMode="text"
            />
          </FormRow>
          <FormRow title="注文者">
            <input
              type="text"
              name=""
              value="名字 名前"
              readOnly
              inputMode="text"
            />
          </FormRow>
          <FormRow title="注文ステータス">
            <input
              type="text"
              name=""
              value="ステータス"
              readOnly
              inputMode="text"
            />
          </FormRow>
        </Card>
      </Row>
      <Row>
        <Card size={12} type="box">
          <DataTableHeading size="heading2">注文内容</DataTableHeading>
          <DataTable columns={columns} data={data} />
          <div style={{ width: '100%', padding: '15px' }}>
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            ></div>
          </div>
        </Card>
      </Row>
    </>
  )
}
