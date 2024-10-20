import React, { useState } from 'react'

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
const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null) // State to track the active menu item

  const toggleSubmenu = (e: React.MouseEvent<HTMLElement>, index: string) => {
    e.stopPropagation()
    e.preventDefault()
    setActiveIndex(activeIndex === index ? null : index) // Toggle the active index
  }

  return (
    <aside>
      <nav>
        <div id="nav">
          <ul className="s_list">
            {items.map((item, index) => (
              <li
                key={index}
                className={`st ${activeIndex === `${index}` ? 'active' : ''}`}
              >
                <a href={item.link}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                  {item.title}
                  {item.subItems && (
                    <i onClick={(e) => toggleSubmenu(e, `${index}`)}></i>
                  )}
                </a>
                {activeIndex === `${index}` && item.subItems && (
                  <ul>
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={subItem.link}>
                          {subItem.title}
                          {subItem.subItems && (
                            <i
                              onClick={(e) => toggleSubmenu(e, `${index}`)}
                            ></i>
                          )}
                        </a>
                        {subItem.subItems && (
                          <ul>
                            {subItem.subItems.map((subSubItem, subSubIndex) => (
                              <li key={subSubIndex}>
                                <a href={subSubItem.link}>{subSubItem.title}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default SideBar

// In your main component or App, use the Menu component like this:
// <Menu items={menuItems} />
