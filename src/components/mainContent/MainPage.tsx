import * as React from 'react'
import { HowItWorks } from './howItWorks/HowItWorks'
import { howItWorksData } from './howItWorks/howItWorksData'
import { ThirdBlock } from './3Block/ThirdBlock'
import { Feedback } from './feedback/FeedBack'
import QuestionsAndAnswers from './Q&A/QuestionsAndAnswers'
import { questionsData } from './Q&A/QuestionsData'
import { Description } from './description/Description'
import { descriptionData } from './description/descriptionData'

export function MainPage() {
  return (
    <>
      <HowItWorks data={howItWorksData} />
      <ThirdBlock />
      <Feedback />
      <QuestionsAndAnswers data={questionsData} />
      <Description data={descriptionData} />
    </>
  )
}
