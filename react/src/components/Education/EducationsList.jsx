import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import {IoCodeWorking} from "react-icons/io5"
const EducationList = ({ alldata }) => {
  return (
    <>
      {alldata.map((data) => (
        <VerticalTimelineElement
          key={data.id}
          contentStyle={{ background: '#f5f5f5', color: '#0f172a' }}
          contentArrowStyle={{ borderRight: '7px solid  gray' }}
          date={data.time}
          iconStyle={{ background: '#0f172a', color: '#fff' }}
        icon={<IoCodeWorking />}
        >
          <h4 >{data.schoolName}</h4>
          <p>
            {data.city}
          </p>
        </VerticalTimelineElement>
      ))}
    </>
  )
}

export default EducationList