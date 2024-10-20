'use client'

import React from 'react'

import Menu, { MenuItem } from '@/components/menu'
import Row from '@/components/row'
import Col from '@/components/col'
import Card from '@/components/card'
import Heading from '@/components/heading'
import BreadCrumb from '@/components/breadcrumb'
import Wrapper from '@/components/wrapper'
import UploadBox from '@/components/uploadbox'
// Example usage of the Menu component
const menuItems: MenuItem[] = [
  {
    title: '注文一覧',
    icon: 'receipt_long',
    link: '/order/',
  },
  {
    title: '企業一覧',
    icon: 'apartment',
    link: '/company/',
    subItems: [
      {
        title: '株式会社BeautyScandal',
        link: '/company/view.php',
        subItems: [
          { title: 'サロン一覧', link: '/company/salon/' },
          { title: 'スタッフ一覧', link: '/company/staff/' },
        ],
      },
      // Add additional companies here
    ],
  },
  {
    title: '代理店一覧',
    icon: 'storefront',
    link: '/agency/',
    subItems: [
      {
        title: '代理店AAAAAAAAAA',
        link: '/agency/view.php',
        subItems: [
          { title: '支店一覧', link: '/agency/branch/' },
          { title: '従業員一覧', link: '/agency/staff/' },
        ],
      },
      // Add additional agencies here
    ],
  },
]

const breadcrumbItems = [
  { link: '/admin/', label: 'ダッシュボード' },
  { link: '/order/', label: '注文一覧' },
]

export default function Home() {
  return (
    <Wrapper closed={closed}>
      <Menu items={menuItems}></Menu>
      <main>
        <Row id="m_title">
          <Col>
            <Heading size={1}>ダッシュボード</Heading>
          </Col>
        </Row>
        <Row id="m_sale">
          <Card size={4}>
            <i>
              <span className="material-symbols-outlined">
                health_and_beauty
              </span>
            </i>
            <div className="inner">
              <Heading size={3}>注文商品数</Heading>
              <p>
                0,000,000<span>点</span>
              </p>
            </div>
          </Card>
          <Card size={4}>
            <i>
              <span className="material-symbols-outlined">
                health_and_beauty
              </span>
            </i>
            <div className="inner">
              <Heading size={3}>注文商品数</Heading>
              <p>
                0,000,000<span>点</span>
              </p>
            </div>
          </Card>
          <Card size={4}>
            <i>
              <span className="material-symbols-outlined">
                health_and_beauty
              </span>
            </i>
            <div className="inner">
              <Heading size={3}>注文商品数</Heading>
              <p>
                0,000,000<span>点</span>
              </p>
            </div>
          </Card>
        </Row>
        <Row>
          <UploadBox />
        </Row>
        <BreadCrumb items={breadcrumbItems} />
      </main>
    </Wrapper>
    // <div className={styles.page}>
    //   <main className={styles.main}>
    //     <Tabs></Tabs>

    //     <ol>
    //       <li>
    //         Get started by editing <code>src/app/page.tsx</code>.
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className={styles.ctas}>
    //       <a
    //         className={styles.primary}
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className={styles.logo}
    //           src="https://nextjs.org/icons/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className={styles.secondary}
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className={styles.footer}>
    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  )
}
