import * as React from 'react'
import { feedbackData } from './feedBackData'
import { Slider } from './Slider'

export function Feedback() {
  return (
    <section className={`grey__bgc`} id="feedback">
      <div className="block ">
        <h2 className="block__title">Отзывы</h2>

        <Slider sliderData={feedbackData} isMobileScreen={false} />
      </div>
    </section>
  )
}
