import styled from 'styled-components'

const Pan = styled.div`
  margin: 15px auto 0;
  padding: 20px 20px 17px;
  font-size: 1.3rem;
  color: #888;
  width: 100%;
  text-shadow: 1px 1px 0 #fff;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid #fff;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    padding: 15px 15px 17px;
  }

  @media screen and (max-width: 400px) {
    padding: 12px 10px 12px;
  }
`

const PanUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
  }

  @media screen and (max-width: 400px) {
    flex-wrap: nowrap;
  }
`

const PanLi = styled.li`
  position: relative;
  display: block;
  padding-right: 20px;

  &:before {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-top: 1px solid #888;
    border-right: 1px solid #888;
    position: absolute;
    top: calc(50% - 3px);
    right: 8px;
    transform: rotate(45deg);
    box-shadow:
      1px 0 0 #fff,
      0 1px 0 #fff inset;
  }

  &:last-child {
    padding-right: 0;

    &:before {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    &:last-child {
      padding-right: 15px;
    }
  }

  @media screen and (max-width: 400px) {
    &:last-child {
      padding-right: 15px;
    }
  }
`
const PanA = styled.a`
  color: #2a2a49;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
`

const PanSpan = styled.span`
  color: #2a2a49;
  white-space: nowrap;
`

interface BreadCrumbItem {
  link: string
  label: string
}

const items: BreadCrumbItem[] = [
  { link: '/dashboard/', label: 'ダッシュボード' },
  { link: '/dashboard/order', label: '注文一覧' },
]
const Breadcrumb = () => (
  <Pan>
    <PanUl>
      {items.map((item, index) => (
        <PanLi key={index}>
          <PanA href={item.link}>
            <PanSpan>{item.label}</PanSpan>
          </PanA>
        </PanLi>
      ))}
    </PanUl>
  </Pan>
)

export default Breadcrumb
