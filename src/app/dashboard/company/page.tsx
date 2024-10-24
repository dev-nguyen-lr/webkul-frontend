'use client'

import React from 'react'

import { Column } from 'react-table'
import Link from 'next/link'
import Row from '@/components/atoms/row'
import Card from '@/components/molecules/card'
import DataTable from '@/components/molecules/datatable'
import Pagination from '@/components/atoms/pagination'
import Button from '@/components/atoms/button'
import Col from '@/components/atoms/col'

interface DataRow {
  favorites: number
  company: string
  representive: string

  code: string
}
const columns: Column<DataRow>[] = [
  {
    Header: <a>BS注文コード</a>,
    accessor: 'code',
  },
  {
    Header: <a>企業名</a>,
    accessor: 'company',
    width: '300px',
    maxWidth: 300,
    Cell: (row) => {
      return (
        <div style={{ textAlign: 'left', width: '300px' }}>
          <Link href="/dashboard/company/view" style={{ fontWeight: 'bold' }}>
            {row.row.original.company}
          </Link>
          <p>代表名： {row.row.original.representive}</p>
        </div>
      )
    },
  },
  {
    Header: <a>お気に入り数</a>,
    accessor: 'favorites',
    Cell: ({ value }) => {
      return (
        <>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '1.5rem' }}
          >
            favorite
          </span>
          {value}
        </>
      )
    },
    width: '100px',
    maxWidth: 100,
  },
]

// Sample data
const data: DataRow[] = [
  {
    code: '0000000000',
    company: '株式会社BeautyScandal',
    representive: '木戸口 里砂',
    favorites: 100,
  },
  {
    code: '0000000000',
    company: '株式会社BeautyScandal',
    representive: '木戸口 里砂',
    favorites: 100,
  },
  {
    code: '0000000000',
    company: '株式会社BeautyScandal',
    representive: '木戸口 里砂',
    favorites: 100,
  },
  {
    code: '0000000000',
    company: '株式会社BeautyScandal',
    representive: '木戸口 里砂',
    favorites: 100,
  },
  {
    code: '0000000000',
    company: '株式会社BeautyScandal',
    representive: '木戸口 里砂',
    favorites: 100,
  },
  {
    code: '0000000000',
    company: '株式会社BeautyScandal',
    representive: '木戸口 里砂',
    favorites: 100,
  },
]

export default function Home() {
  return (
    <>
      <Row>
        <Col>
          <Button label="新規企業登録" primary={false} />
        </Col>
      </Row>
      <Row>
        <Card size={12} type="box">
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
