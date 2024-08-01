import * as React from 'react'
import { HowItWorks } from './howItWorks/HowItWorks'
import { howItWorksData } from './howItWorks/howItWorksData'
import { ThirdBlock } from './3Block/ThirdBlock'
import { Feedback } from './feedback/FeedBack'

export function MainPage() {
  return (
    <>
      <HowItWorks data={howItWorksData} />
      <ThirdBlock />
      <Feedback />
    </>
  )
}
