'use client'

import React from 'react'

import Row from '@/components/atoms/row'
import UploadBox from '@/components/atoms/upload-box'
import Card from '@/components/molecules/card'
import CheckBox from '@/components/atoms/checkbox'
import RadioBox from '@/components/atoms/radiobox'
import Heading from '@/components/atoms/heading'
import FormRow from '@/components/molecules/form-row'

export default function Home() {
  return (
    <>
      <Row>
        <Card size={12} type="box">
          <Heading size="heading2">スタッフ情報</Heading>
          <FormRow title="BSスタッフコード" isFirstRow={true}>
            <input
              type="text"
              name=""
              value="0000000000"
              readOnly
              inputMode="numeric"
            />
          </FormRow>
          <FormRow title="企業">
            <input
              type="text"
              name=""
              value="株式会社BeautyScandal"
              readOnly
              inputMode="text"
            />
          </FormRow>
          <FormRow title="BSスタッフコード">
            <CheckBox id="checkbox1" name="checkbox1" label="サロンAAA" />
            <CheckBox id="checkbox2" name="checkbox2" label="サロンBBB" />
            <CheckBox id="checkbox3" name="checkbox3" label="サロンCCC" />
            <CheckBox id="checkbox4" name="checkbox4" label="サロンDDD" />
            <CheckBox id="checkbox5" name="checkbox5" label="サロンEEE" />
            <CheckBox id="checkbox6" name="checkbox6" label="サロンFFF" />
            <CheckBox id="checkbox7" name="checkbox7" label="サロンGGG" />
            <CheckBox id="checkbox8" name="checkbox8" label="サロンHHH" />
            <CheckBox id="checkbox9" name="checkbox9" label="サロンIII" />
            <CheckBox id="checkbox10" name="checkbox10" label="サロンJJJ" />
          </FormRow>
          <FormRow title="スタッフ名" helperText="必須">
            <input type="text" name="" value="" />
          </FormRow>
          <FormRow title="画像">
            <UploadBox></UploadBox>
          </FormRow>
        </Card>
      </Row>
      <Row>
        <Card size={12} type="box">
          <Heading size="heading2">SNS</Heading>
          <FormRow title="Instagram" isFirstRow={true}>
            <input type="text" name="" value="" />
          </FormRow>
          <FormRow title="TikTok">
            <input type="text" name="" value="" />
          </FormRow>
          <FormRow title="youtube">
            <input type="text" name="" value="" />
          </FormRow>
        </Card>
      </Row>
      <Row>
        <Card size={12} type="box">
          <Heading size="heading2">コメント</Heading>
          <FormRow title="コメント" isFirstRow={true}>
            <textarea rows={5} />
          </FormRow>
        </Card>
      </Row>
      <Row>
        <Card size={12} type="box">
          <Heading size="heading2">スタッフセール</Heading>
          <FormRow title="スタッフセール" isFirstRow={true}>
            <RadioBox label="注文不可" name="radio" id="radio1" />
            <RadioBox label="注文可能" name="radio" id="radio1" />
          </FormRow>
        </Card>
      </Row>
    </>
  )
}
