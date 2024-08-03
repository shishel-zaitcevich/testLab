import * as React from 'react'
import '../styles/sideBarMenuStyles.scss'

interface IconProps {
  onClick: () => void
}

export function IconBars({ onClick }: IconProps) {
  return (
    <div className="icon__bars" onClick={onClick}>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  )
}

export function IconCross({ onClick }: IconProps) {
  return (
    <div>
      <div className="icon__cross" onClick={onClick}>
        <span className="line line1"></span>
        <span className="line line2"></span>
      </div>
    </div>
  )
}
