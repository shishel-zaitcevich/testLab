import * as React from 'react'
import { Link } from 'react-scroll'
import BMImg from '../../assets/images/bm_img.png'
import SmallArrow from '../../assets/images/fi-sr-angle-small-right.png'
import { SideBarMenuProps } from 'mainTypes'
import { useRef, useState } from 'react'
import '../../styles/sideBarMenuStyles.scss'
import { IconBars, IconCross } from '../../utils/icons'

export function SideBarMenu({ items }: SideBarMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleClickOverlay = (event: React.MouseEvent) => {
    if (event.target === menuRef.current) {
      setIsOpen(false)
    }
  } //почему не работает?

  return (
    <>
      {isOpen && (
        <div className="sidebar__overlay" onClick={handleClickOverlay}></div>
      )}

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <IconBars onClick={toggleMenu} />

        <div className="sidebar__items">
          <div className="logo__icon_group">
            <img src={BMImg} alt="logo" />
            <IconCross onClick={toggleMenu} />
          </div>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="divider"></div>
              <Link
                className="sidebar__link"
                to={item.link}
                smooth={true}
                duration={3000}
                onClick={toggleMenu}
              >
                {item.text}
                <img src={SmallArrow} alt="arrow" />
              </Link>
            </React.Fragment>
          ))}
          <div className="divider"></div>
        </div>
      </div>
    </>
  )
}
