import * as React from 'react'
import AccordionUsage from './AccordionUsage'
import { AccordionUsageProps } from 'mainTypes'

export default function QuestionsAndAnswers({ data }: AccordionUsageProps) {
  return (
    <section className="block questions__block" id="questions_and_answers">
      <h2 className="block__title questions__title">Вопросы и ответы</h2>
      <AccordionUsage data={data} />
    </section>
  )
}
