'use client'

import React from 'react'

import { Column } from 'react-table'
import Row from '@/components/atoms/row'
import UploadBox from '@/components/atoms/upload-box'
import Card from '@/components/molecules/card'
import CheckBox from '@/components/atoms/checkbox'
import RadioBox from '@/components/atoms/radiobox'
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
}
const columns: Column<DataRow>[] = [
  {
    Header: <a>ステータス</a>,
    accessor: 'status', // This must match the key in DataRow
    Cell: ({ value }) => {
      return <Badge>{value}</Badge>
    },
    width: '100px',
    maxWidth: 100,
  },
  {
    Header: <a>ステータス</a>,
    accessor: 'code', // This must match the key in DataRow
    Cell: ({ value }) => {
      return <Badge>{value}</Badge>
    },
  },
  // {
  //   Header: 'Name',
  //   accessor: 'name', // This must match the key in DataRow
  // },
  // {
  //   Header: 'Age',
  //   accessor: 'age', // This must match the key in DataRow
  // },
]

// Sample data
const data: DataRow[] = [
  {
    status: 'ステータス',
    firstName: '名字',
    lastName: '名前',
    code: '0000000000',
    date: '2024/01/20',
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
      <Row>
        <UploadBox />
      </Row>
      <Row>
        <CheckBox id="checkbox" name="checkbox" label="checkbox" />
      </Row>
      <Row>
        <RadioBox id="radiobox1" name="radiobox1" label="radiobox1" />
        <RadioBox id="radiobox2" name="radiobox1" label="radiobox2" />
      </Row>
    </>
  )
}
