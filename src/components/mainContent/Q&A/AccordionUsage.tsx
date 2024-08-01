import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import PlusIcon from '../../../assets/images/plus_icon.png'
import PlusIconBlue from '../../../assets/images/plus_icon_blue.png'
import '../../../styles/questionsAndAnswers.scss'
import { AccordionUsageProps } from 'mainTypes'

export default function AccordionUsage({ data }: AccordionUsageProps) {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  return (
    <div>
      <div className="questions">
        {data.map((list, index) => (
          <React.Fragment key={index}>
            <div className="divider"></div>
            <Accordion elevation={0} className="custom-accordion">
              <AccordionSummary
                expandIcon={
                  <img
                    src={hoveredIndex === index ? PlusIconBlue : PlusIcon}
                    alt="Plus Icon"
                    className="accordion-icon"
                  />
                }
                aria-controls="panel1-content"
                className="accordion-summary"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {list.title}
              </AccordionSummary>
              <AccordionDetails className="accordion__text">
                {list.text}
              </AccordionDetails>
            </Accordion>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
