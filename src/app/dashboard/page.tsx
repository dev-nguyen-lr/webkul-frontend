'use client'

import React from 'react'

import Row from '@/components/atoms/row'
import UploadBox from '@/components/atoms/upload-box'
import Card from '@/components/molecules/card'
import CheckBox from '@/components/atoms/checkbox'
import RadioBox from '@/components/atoms/radiobox'

// Example usage of the Menu component

export default function Home() {
  return (
    <>
      <Row className="multi-card-row">
        <Card size={4}>
          <i>
            <span className="material-symbols-outlined">health_and_beauty</span>
          </i>
          <div className="inner">
            <div className="heading3">注文商品数</div>
            <p>
              0,000,000<span>点</span>
            </p>
          </div>
        </Card>
        <Card size={4}>
          <i>
            <span className="material-symbols-outlined">health_and_beauty</span>
          </i>
          <div className="inner">
            <div className="heading3">注文商品数</div>
            <p>
              0,000,000<span>点</span>
            </p>
          </div>
        </Card>
        <Card size={4}>
          <i>
            <span className="material-symbols-outlined">health_and_beauty</span>
          </i>
          <div className="inner">
            <div className="heading3">注文商品数</div>
            <p>
              0,000,000<span>点</span>
            </p>
          </div>
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
