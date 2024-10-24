'use client'

import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Heading from '../atoms/heading'
import Row from '../atoms/row'
import Col from '../atoms/col'
import Button from '../atoms/button'
import Header from './header'
import BreadCrumb from './breadcrumb'
import SideBar from './sidebar'
import Footer from './footer'

interface PropsWithChildren {
  children: ReactNode
}

const PageTitleRow = styled(Row)`
  border-bottom: 1px solid #ccc;
  box-shadow: 0 1px 0 #fff;
  margin-bottom: 25px;
  padding-top: 20px;

  div[class*='col-'] {
    padding-bottom: 10px;
  }

  .col-4 {
    justify-content: flex-end;
  }

  @media screen and (max-width: 600px) {
    .col-4 {
      justify-content: flex-start;
    }
  }
`
const MainPage = styled.div`
  position: relative;
  width: 100%;
  padding-top: 65px;
`
const Main = styled.main<{ closed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 260px;
  ${({ closed }) => closed && 'width: 100%;'}
  ${({ closed }) => !closed && 'width: calc(100% - 260px);'}
  min-height: calc(100vh - 115px);
  background: #f5f5f5;
  transition: 0.3s ease-in-out;
  position: relatvisualive;
  z-index: 1;

  ${({ closed }) => closed && 'margin-left: 0;'}

  &.sp {
    margin-left: 0;
    width: 100%;
  }

  @media screen and (max-width: 850px) {
    min-height: calc(100vh - 113px); /*100vh - 65px - 48px*/
  }
  @media screen and (max-width: 768px) {
    min-height: calc(100vh - 103px); /*100vh - 55px - 48px*/
  }
  @media screen and (max-width: 550px) {
    min-height: calc(100vh - 136px); /*100vh - 55px - 81px*/
  }

  > hr {
    border-top: 1px solid #fff;
    box-shadow: 0 -1px 0 #ccc;
    width: calc(100% - 40px);
    height: 0;
    margin: 0 auto 20px;
    display: block;
  }

  @media screen and (max-width: 768px) {
    > hr {
      width: calc(100% - 30px);
    }
  }
  @media screen and (max-width: 400px) {
    > hr {
      margin-bottom: 15px;
      width: calc(100% - 20px);
    }
  }
`
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 100%;
`
const HeaderAndSidebar: React.FC<PropsWithChildren> = ({ children }) => {
  const [closed, setClosed] = React.useState(false)

  return (
    <MainPage className={`${closed ? 'close' : ''}`}>
      <Header
        onClose={() => {
          setClosed(!closed)
        }}
      />
      <SideBar closed={closed} />
      <Main closed={closed}>
        <PageTitleRow>
          <Col size={8}>
            <Heading size="heading1">ダッシュボード</Heading>
          </Col>
          <Col size={4} style={{ justifyContent: 'flex-end' }}>
            <SearchContainer>
              <input
                type="text"
                style={{
                  margin: ' 0 5px 0 0',
                  width: 'calc(100% - 63px)',
                  maxWidth: '250px',
                }}
              />
              <Button
                primary={false}
                label="検索"
                style={{ minWidth: 'auto' }}
              />
            </SearchContainer>
          </Col>
        </PageTitleRow>
        {children}
        <BreadCrumb />
      </Main>
      <Footer />
    </MainPage>
  )
}
export default HeaderAndSidebar
