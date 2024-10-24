'use client'

import React from 'react'

import Row from '@/components/atoms/row'
import Card from '@/components/molecules/card'
import RadioBox from '@/components/atoms/radiobox'
import Heading from '@/components/atoms/heading'
import FormRow from '@/components/molecules/form-row'

export default function Home() {
  return (
    <>
      <Row>
        <Card size={12} type="box">
          <Heading size="heading2">法人情報</Heading>
          <FormRow title="BSスタッフコード" isFirstRow={true}>
            <input
              type="text"
              name=""
              value="0000000000"
              readOnly
              inputMode="numeric"
            />
          </FormRow>
          <FormRow title="法人名" helperText="必須">
            <input
              type="text"
              name=""
              value="法人名法人名法人名"
              readOnly
              inputMode="text"
            />
          </FormRow>
          <FormRow title="代表名" helperText="必須">
            <input
              type="text"
              name=""
              value="代表名代表名代表名"
              readOnly
              inputMode="text"
            />
          </FormRow>
          <FormRow title="郵便番号" helperText="必須">
            <span style={{ width: '23px', display: 'inline-block' }}>〒</span>
            <input
              type="text"
              name=""
              value="0000000"
              readOnly
              inputMode="numeric"
              style={{
                width: 'calc(100% - 23px)',
                maxWidth: 'calc(500px - 23px)', // Corrected to maxWidth
              }}
            />
          </FormRow>
          <FormRow title="住所" helperText="必須">
            <input
              type="text"
              name=""
              value="住所住所住所住所住所住所住所"
              readOnly
              inputMode="text"
            />
          </FormRow>
          <FormRow title="電話番号" helperText="必須">
            <input
              type="text"
              name=""
              value="mail@mail.mail"
              readOnly
              inputMode="email"
            />
          </FormRow>
          <FormRow title="メールアドレス" helperText="必須">
            <input
              type="text"
              name=""
              value="代表名代表名代表名"
              readOnly
              inputMode="text"
            />
          </FormRow>
        </Card>
      </Row>
      <Row>
        <Card size={12} type="box">
          <Heading size="heading2">シェアEC</Heading>
          <FormRow title="シェアEC" isFirstRow={true} helperText="必須">
            <RadioBox label="行う" name="ec" id="Ec1" />
            <RadioBox label="行わない" name="ec" id="Ec2" />
          </FormRow>
        </Card>
      </Row>
      <Row>
        <Card size={12} type="box">
          <Heading size="heading2">SMBC GMO登録</Heading>
          <FormRow title="SHOP ID" isFirstRow={true}>
            <input type="text" name="" value="0000000000" readOnly />
          </FormRow>
          <FormRow title="SITE PASS">
            <input type="text" name="" value="0000000000" readOnly />
          </FormRow>
          <FormRow title="CARD API KEY">
            <input type="text" name="" value="0000000000" readOnly />
          </FormRow>
          <FormRow title="CARD PUB KEY">
            <input type="text" name="" value="0000000000" readOnly />
          </FormRow>
        </Card>
      </Row>
      <Row>
        <Card size={12} type="box">
          <Heading size="heading2">月額支払い方法</Heading>
          <FormRow title="支払い方法" isFirstRow={true} helperText="必須">
            <RadioBox label="請求書払い" name="radio" id="radio1" />
            <RadioBox label="クレジットカード" name="radio" id="radio1" />
          </FormRow>
        </Card>
      </Row>
      <Row>
        <Card size={12} type="box">
          <Heading size="heading2">カード情報</Heading>
          <FormRow title="カード番号" isFirstRow={true}>
            <input type="text" name="" value="0000000000" readOnly />
          </FormRow>
          <FormRow title="クレジットカード名義人">
            <input type="text" name="" value="名義人名義人" readOnly />
          </FormRow>
          {/* <FormRow title="有効期限">
            <SelectBox/>
          </FormRow> */}
          <FormRow title="セキュリティコード">
            <input type="text" name="" value="..." readOnly />
          </FormRow>
        </Card>
      </Row>
    </>
  )
}
