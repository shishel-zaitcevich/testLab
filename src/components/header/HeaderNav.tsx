import * as React from 'react'
import { Link } from 'react-scroll'
import HeaderBgi from '../../assets/images/rounds.png'

export function HeaderNav() {
  return (
    <>
      <div className="header__nav">
        <img src={HeaderBgi} alt="logo" />
        <nav className="nav">
          <Link
            className={`link`}
            to="howItWorks"
            smooth={true}
            duration={3000}
          >
            Как это работает
          </Link>
          <Link
            className={`link`}
            to="thirdBlock"
            smooth={true}
            duration={3000}
          >
            3-й блок
          </Link>
          <Link className={`link`} to="/" smooth={true} duration={500}>
            Вопросы и ответы
          </Link>
          <Link className={`link`} to="/" smooth={true} duration={500}>
            Форма
          </Link>
        </nav>
      </div>
    </>
  )
}
