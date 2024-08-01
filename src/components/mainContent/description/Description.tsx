import { AccordionUsageProps } from 'mainTypes'
import * as React from 'react'
import '../../../styles/description.scss'

export function Description({ data }: AccordionUsageProps) {
  return (
    <section className={`grey__bgc`}>
      <div className="block ">
        <div className="description__block">
          {data.map((list, index) => (
            <React.Fragment key={index}>
              <div className="description">
                <h3 className={`accordion-summary`}>{list.title}</h3>
                <p className="description__text">{list.text}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
