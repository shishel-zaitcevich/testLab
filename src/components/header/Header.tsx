import * as React from 'react'
import { HeaderNav } from './HeaderNav'
import '../../styles/header.scss'
import { HeaderContent } from './HeaderContent'
import { sideBarMenuData } from './sideBarMenuData'

export function Header() {
  return (
    <header className="header">
      <HeaderNav items={sideBarMenuData} />
      <HeaderContent />
    </header>
  )
}
