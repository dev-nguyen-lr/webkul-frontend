import React, { useState } from 'react'
import styled from 'styled-components'

// Define the structure for menu items
export interface MenuItem {
  title: string
  icon?: string
  link: string
  subItems?: MenuItem[]
}
const items: MenuItem[] = [
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
    ],
  },
]
const SidebarContainer = styled.aside<{ closed: boolean }>`
  position: fixed;
  top: 65px;
  left: 0;
  width: 260px;
  height: calc(100% - 65px);
  background: #333;
  color: #eee;
  padding-top: 65px;
  transition: 0.3s ease-in-out;
  z-index: 2;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  ${({ closed }) => closed && 'left: -260px;'}

  @media screen and (max-width: 768px) {
    top: 55px;
    height: calc(100% - 55px);
    padding-top: 55px;
  }
`

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const List = styled.ul`
  padding-top: 10px;
  display: block;
  margin-bottom: 10px;
`

const ListItem = styled.li<{ isactive: boolean }>`
  position: relative;
  display: block;

  > a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 20px;
    font-weight: bold;
    color: ${({ isactive }) => (isactive ? '#fff' : '#ccc')};
    background: ${({ isactive }) =>
      isactive ? 'rgba(255, 255, 255, 0.03)' : 'none'};
    transition: 0.2s;

    &:hover {
      color: #efefef;
    }
  }

  > a span {
    margin-right: 5px;
    font-size: 2rem;
  }

  > a i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    position: absolute;
    top: calc(50% - 22px);
    right: 0;
  }

  > a i:before {
    content: ${({ isactive }) => (isactive ? '-' : '+')};
  }
`

const SubList = styled.ul`
  padding-left: 20px;
  display: block;
`

interface SideBarProps {
  closed: boolean
}
const SideBar: React.FC<SideBarProps> = ({ closed = false }) => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const toggleSubmenu = (e: React.MouseEvent<HTMLElement>, index: string) => {
    e.stopPropagation()
    e.preventDefault()
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <SidebarContainer closed={closed}>
      <Nav>
        <List>
          {items.map((item, index) => (
            <ListItem key={index} isactive={activeIndex === `${index}`}>
              <a href={item.link}>
                <span className="material-symbols-outlined">{item.icon}</span>
                {item.title}
                {item.subItems && (
                  <i onClick={(e) => toggleSubmenu(e, `${index}`)} />
                )}
              </a>
              {activeIndex === `${index}` && item.subItems && (
                <SubList>
                  {item.subItems.map((subItem, subIndex) => (
                    <ListItem key={subIndex} isactive={false}>
                      <a href={subItem.link}>
                        {subItem.title}
                        {subItem.subItems && (
                          <i onClick={(e) => toggleSubmenu(e, `${index}`)} />
                        )}
                      </a>
                      {subItem.subItems && (
                        <SubList>
                          {subItem.subItems.map((subSubItem, subSubIndex) => (
                            <ListItem key={subSubIndex} isactive={false}>
                              <a href={subSubItem.link}>{subSubItem.title}</a>
                            </ListItem>
                          ))}
                        </SubList>
                      )}
                    </ListItem>
                  ))}
                </SubList>
              )}
            </ListItem>
          ))}
        </List>
      </Nav>
    </SidebarContainer>
  )
}
export default SideBar
