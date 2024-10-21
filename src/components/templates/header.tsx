import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

interface HeaderProps {
  onClose: () => void
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  background: #292929;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  padding: 10px 20px;
  text-align: center;
  z-index: 3;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  font-size: 1.4rem;
`

const LogoContainer = styled.div`
  position: absolute;
  top: 10px;
  left: calc(50% - 100px);
  width: 200px;
  height: calc(100% - 20px);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    object-fit: contain;
    width: 100%;
    height: 100%;
    filter: invert(100%);
  }
`

const CloseButton = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  a {
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  a i,
  a i:before,
  a i:after {
    content: '';
    display: block;
    width: 22px;
    height: 1px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 8px;
    transition: 0.2s;
  }
  a i:before {
    top: -8px;
    left: 0;
  }
  a i:after {
    top: 8px;
    left: 0;
  }
  a:hover i:before {
    transform: rotate(-225deg);
    left: -5px;
    top: -7px;
    width: 20px;
  }
  a:hover i:after {
    transform: rotate(225deg);
    left: -5px;
    top: 7px;
    width: 20px;
  }
  .close a:hover i:before {
    transform: rotate(45deg);
    left: 9px;
    top: -7px;
    width: 20px;
  }
  .close a i:after {
    transform: rotate(180deg);
  }
  .close a i:before {
    transform: rotate(-180deg);
  }
  .close a:hover i:after {
    transform: rotate(-45deg);
    left: 9px;
    top: 7px;
    width: 20px;
  }
`

const NavList = styled.ul`
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  position: absolute;
  right: 20px;
  top: calc(50% - 22px);
`

const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    width: 44px;
    height: 44px;
    border-radius: 100px;
    transition: 0.2s;

    &:hover {
      background: #444;
    }

    span {
      color: #fff;
      transition: 0.2s;
    }
  }
`

const Header: React.FC<HeaderProps> = ({ onClose }) => {
  return (
    <HeaderWrapper>
      <CloseButton id="close" onClick={onClose}>
        <a href="#">
          <i></i>
        </a>
      </CloseButton>
      <LogoContainer className="logo">
        <a href="/">
          <Image
            src="/images/pro.webp"
            layout="responsive"
            alt="Beauty Scandal Pro"
            width={100}
            height={100}
          />
        </a>
      </LogoContainer>
      <NavList>
        <NavItem>
          <a href="/">
            <span className="material-symbols-outlined">move_item</span>
          </a>
        </NavItem>
      </NavList>
    </HeaderWrapper>
  )
}

export default Header
