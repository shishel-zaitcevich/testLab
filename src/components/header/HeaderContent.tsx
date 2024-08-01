import { Button } from '@mui/material'
import * as React from 'react'

export function HeaderContent() {
  return (
    <div className="header__content">
      <h1 className="title">Говорят, никогда не поздно сменить профессию</h1>
      <p className="header__text">
        Сделай круто тестовое задание и у тебя получится
      </p>
      <button className="header__button">Проще простого!</button>
      {/* <Button variant="contained" color="white">
        Проще простого!
      </Button> */}
    </div>
  )
}
