import * as React from 'react'
import Money from '../../../assets/images/money.png'
import '../../../styles/thirdBlockStyles.scss'

export function ThirdBlock() {
  return (
    <section className={`block third-block`} id="thirdBlock">
      <div className="third-block__content">
        <h2 className="block__title third__title">
          Круто, ты дошел до третьего блока
        </h2>
        <p className="third-block__text">
          63% опрошенных пользовались кредитами из-за того, что не могли покрыть
          непредвиденные расходы свыше 15 000 ₽. <br />
          <br />
          Доступ к заработанным деньгам помогает отказаться от кредитов и
          экономить деньги на процентах и штрафах.
        </p>
      </div>
      <img src={Money} alt="money_img" />
    </section>
  )
}
