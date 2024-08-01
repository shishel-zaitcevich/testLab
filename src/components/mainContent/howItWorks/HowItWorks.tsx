import * as React from 'react'
import { howItWorksType } from 'mainTypes'
import '../../../styles/howItWorksStyles.scss'

interface HowItWorksProps {
  data: howItWorksType[]
}

export function HowItWorks({ data }: HowItWorksProps) {
  return (
    <section className={`block `} id="howItWorks">
      <h2 className="block__title">Как это работает</h2>
      <div className="recommendations">
        {data.map((list, index) => (
          <React.Fragment key={index}>
            <div className={`content_block`}>
              <img src={list.img} alt="img" className="icons" />
              <h3 className={`recommendations__title`}>{list.title}</h3>
              <p className="recommendations__text">{list.text}</p>
            </div>
            {/* <div className={`divider`}></div> */}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
