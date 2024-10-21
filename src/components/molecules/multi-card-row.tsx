import styled from 'styled-components'
import Row from '../atoms/row'

const MultiCardRow = styled(Row)`
  .col-12 {
    position: relative;
    padding-bottom: 0;
    margin-top: -25px;
    min-height: 40px;
  }
  .col-12 span[class*='material-'] {
    color: #333;
    display: block;
    margin-right: 5px;
    font-size: 1.9rem;
  }
  .multi-card-row_setting {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0 0 0 auto;
  }
  .col-12 .content {
    max-width: calc(100vw - 105px);
    position: absolute;
    top: 20px;
    right: 65px;
    background: #fff;
    padding: 15px 20px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    z-index: 3;
    pointer-events: none;
    opacity: 0;
    transition: 0.3s ease-in-out;
  }
  .col-12 .content:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right: none;
    border-left: solid 7px #fff;
    position: absolute;
    top: 5px;
    right: -7px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.08);
  }
  .col-12 .content.show {
    pointer-events: auto;
    opacity: 1;
    top: 10px;
  }
  @media screen and (max-width: 400px) {
    .col-12 .content {
      max-width: calc(100vw - 75px);
      right: 55px;
    }
  }
  .col-12 .content .inner {
    width: 100%;
    display: block;
  }
  .col-12 .form_flex {
    padding: 8px 0 8px 25px;
    border-bottom: 1px solid #ddd;
    width: auto;
    position: relative;
    flex-wrap: wrap;
  }
  .col-12 .form_flex:first-child {
    border-top: 1px solid #ddd;
  }
  .col-12 .form_flex span[class*='material-'] {
    position: absolute;
    top: calc(50% - 0.95rem);
    left: 0;
  }
  .col-12 .form_flex > div {
    margin: 2px 10px 2px 0;
    display: inline-block;
    max-width: 100%;
  }
  .col-12 .form_flex > div:last-child {
    margin-right: 0;
  }
  .datepicker + span {
    margin: 0 5px;
  }
  .datepicker {
    width: 100px;
  }
  .col-12 .content select {
    margin: 0;
    max-width: 100%;
    display: block;
  }
  .content:has(.refine_company select option:checked[value=''])
    .refine_salon
    select,
  .content:has(.refine_company select option:checked[value=''])
    .refine_staff
    select {
    background: #f0f0f0;
    color: #999;
    pointer-events: none;
  }
  .content:has(.refine_agency select option:checked[value=''])
    .refine_branch
    select {
    background: #f0f0f0;
    color: #999;
    pointer-events: none;
  }
  .col-12 .content .btn2 {
    margin-top: 10px;
  }

  .col_in .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .col_in .content i {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background: #f3ecfe;
  }
  .col-4:nth-of-type(2) .content i {
    background: #edf7fe;
  }
  .col-4:nth-of-type(3) .content i {
    background: #fdf1eb;
  }
  .content i span[class*='material-'] {
    display: block;
    color: #6e39d9;
  }
  .col-4:nth-of-type(2) .content i span[class*='material-'] {
    color: #5da2c6;
  }
  .col-4:nth-of-type(3) .content i span[class*='material-'] {
    color: #f0915e;
  }
  .content .inner {
    width: calc(100% - 80px);
  }
  .content .inner p {
    font-weight: bold;
    font-size: 3rem;
    line-height: 1.4;
  }
  .content .inner p span {
    font-size: 1.6rem;
  }
  .content .inner .heading3 {
    color: #999;
    line-height: 1.4;
  }
  @media screen and (max-width: 1400px) {
    .col_in {
      padding: 30px 10px;
    }
    .col_in .content {
      flex-direction: column;
      text-align: center;
    }
    .col_in .content i {
      margin-bottom: 10px;
    }
    .content .inner {
      width: 100%;
    }
  }
  @media screen and (max-width: 800px) {
    .content .inner p {
      font-size: 2.6rem;
    }
  }
`
export default MultiCardRow
