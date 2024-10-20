import Image from 'next/image'
import React from 'react'
interface HeaderProps {
  onClose: () => void
}
const Header: React.FC<HeaderProps> = ({ onClose }) => {
  return (
    <header>
      <div id="close" onClick={onClose}>
        <a href="#">
          <i></i>
        </a>
      </div>
      <div className="logo">
        <a href="/">
          <Image
            src="/images/pro.webp"
            layout="responsive"
            alt="Beauty Scandal Pro"
            width={100}
            height={100}
          />
        </a>
      </div>
      <ul>
        <li>
          <a href="/">
            <span className="material-symbols-outlined">move_item</span>
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
