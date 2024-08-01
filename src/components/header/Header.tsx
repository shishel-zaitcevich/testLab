import * as React from 'react'
import { HeaderNav } from './HeaderNav'
import '../../styles/header.scss'
import { HeaderContent } from './HeaderContent'

export function Header() {
  return (
    <header className="header">
      <HeaderNav />
      <HeaderContent />
    </header>
  )
}
