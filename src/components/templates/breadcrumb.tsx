import React from 'react'

interface BreadCrumbItem {
  link: string
  label: string
}

const items: BreadCrumbItem[] = [
  { link: '/admin/', label: 'ダッシュボード' },
  { link: '/order/', label: '注文一覧' },
]
const BreadCrumb = () => {
  return (
    <div id="pan">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default BreadCrumb
