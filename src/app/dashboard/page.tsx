'use client'

import React from 'react'
import { ColumnDef } from '@tanstack/react-table'

import Row from '@/components/atoms/row'
import UploadBox from '@/components/atoms/upload-box'
import Card from '@/components/molecules/card'
import CheckBox from '@/components/atoms/checkbox'
import RadioBox from '@/components/atoms/radiobox'
import MultiCardRow from '@/components/molecules/multi-card-row'
import Heading from '@/components/atoms/heading'
import DataTableHeading from '@/components/molecules/datatable/data-table-heading'
import Icon from '@/components/atoms/icon'
import { DataTable } from '@/components/molecules/datatable'
import { Order } from '@/@types/datatable'
import { DataTableColumnHeader } from '@/components/molecules/datatable/data-table-column-header'
import Badge from '@/components/atoms/badge'

const orders = [
  {
    id: '山田 太郎',
    status: 'ステータス',
  },
]
export default function Home() {
  const columns: ColumnDef<Order>[] = [
    {
      accessorKey: 'id',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="名前" />
      ),
      cell: ({ row }) => <div>{row.getValue('id')}</div>,
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'status',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="メールアドレス" />
      ),
      cell: ({ row }) => {
        return <Badge>{row.getValue('status')}</Badge>
      },
      // cell: ({ row }) => <div>{row.getValue('id')}</div>,
    },
  ]
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
          <DataTable columns={columns} data={orders} />
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
