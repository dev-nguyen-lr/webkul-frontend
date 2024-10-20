'use client'

import React, { ReactNode } from 'react'
import Row from '../atoms/row'
import Col from '../atoms/col'
import Header from './header'
import BreadCrumb from './breadcrumb'
import SideBar from './sidebar'

interface PropsWithChildren {
  children: ReactNode
}

const HeaderAndSidebar: React.FC<PropsWithChildren> = ({ children }) => {
  const [closed, setClosed] = React.useState(false)

  return (
    <div className={`main_page ${closed ? 'close' : ''}`}>
      <Header
        onClose={() => {
          setClosed(!closed)
        }}
      />
      <SideBar />
      <main>
        <Row className="page_title">
          <Col>
            <div className="heading1">ダッシュボード</div>
          </Col>
        </Row>
        {children}
        <BreadCrumb />
      </main>
      <footer>
        <p className="cp">&copy; BEAUTY SCANDAL</p>
      </footer>
    </div>
  )
}
export default HeaderAndSidebar
