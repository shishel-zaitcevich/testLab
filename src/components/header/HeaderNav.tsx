import * as React from 'react'
import { Link } from 'react-scroll'
import HeaderBgi from '../../assets/images/rounds.png'
import { SideBarMenu } from './SideBarMenu'
import { sideBarMenuData } from './sideBarMenuData'
import { SideBarMenuProps } from 'mainTypes'

export function HeaderNav({ items }: SideBarMenuProps) {
  return (
    <>
      <div className="header__nav">
        <img src={HeaderBgi} alt="logo" />
        <nav className="nav">
          {items.map((item, index) => (
            <Link
              key={index}
              className={`link`}
              to={item.link}
              smooth={true}
              duration={3000}
            >
              {item.text}
            </Link>
          ))}
        </nav>
        <SideBarMenu items={sideBarMenuData} />
      </div>
    </>
  )
}
