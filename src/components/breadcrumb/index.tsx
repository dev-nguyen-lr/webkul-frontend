import React from 'react'

interface BreadCrumbItem {
  link: string
  label: string
}

interface BreadCrumbProps {
  items: BreadCrumbItem[]
}
const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => {
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
