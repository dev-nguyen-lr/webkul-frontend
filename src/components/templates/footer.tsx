import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin-left: 260px;
  width: calc(100% - 260px);
  background: #292929;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.3rem;
  padding: 15px 20px;
  transition: 0.3s ease-in-out;
  position: relative;
  z-index: 1;
  color: rgba(255, 255, 255, 0.7);

  &.close,
  &.sp {
    margin-left: 0;
    width: 100%;
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    transition: 0.2s;

    &:hover {
      color: #fff;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      display: block;

      a {
        padding: 5px 10px;
      }
    }
  }

  .cp {
    margin-left: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 15px 10px;
  }

  @media screen and (max-width: 550px) {
    justify-content: center;

    nav {
      margin-bottom: 15px;
      width: 100%;
    }

    ul li a {
      padding: 5px;
    }

    .cp {
      width: 100%;
      text-align: center;
      margin-left: 0;
    }
  }
`

const Footer = () => (
  <StyledFooter>
    <p className="cp">&copy; BEAUTY SCANDAL</p>
  </StyledFooter>
)

export default Footer
