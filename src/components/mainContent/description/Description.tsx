import { AccordionUsageProps } from 'mainTypes'
import * as React from 'react'

export function Description({ data }: AccordionUsageProps) {
  return (
    <section className={`grey__bgc`}>
      <div className="block">
        <div className="description">
          {data.map((list, index) => (
            <React.Fragment key={index}>
              <h3 className={`accordion-summary`}>{list.title}</h3>
              <p className="description__text">{list.text}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
