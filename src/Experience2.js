import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react'
import { description } from './Experience';
import './Experience.css';

// const cardColor = 'rgba(206, 238, 255, 0.6)'
const cardColor = 'white'
const dotColor = '#ffc4c4'

const Experience = () => {

    return (
        <section id="experience" className="experience-container">
            <h2>Experience</h2>
            <VerticalTimeline animate={true}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: cardColor, borderRadius:  "1rem"}}
                    contentArrowStyle={{ borderRight: '7px solid ' + cardColor }}
                    iconStyle={{ background: dotColor, color: '#fff' }}
                    date="March 2017 - January 2019"
                >
                    <p>Senior Frontend Engineer<br /><i>Pfizer</i></p>
                    <ul>
                        {description['pfizer'].map(item =>
                            <li>{item}</li>
                        )}
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="July 2016 - January 2017"
                    contentStyle={{ background: cardColor, borderRadius:  "1rem"}}
                    contentArrowStyle={{ borderRight: '7px solid ' + cardColor }}
                    iconStyle={{ background: dotColor, color: '#fff' }}
                >
                    <p>Senior Frontend Engineer <br /><i>Voya Financial</i></p>
                    <ul>
                        {description['voya-financial'].map(item =>
                            <li>{item}</li>
                        )}
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="June 2015 - June 2016"
                    contentStyle={{ background: cardColor, borderRadius:  "1rem"}}
                    contentArrowStyle={{ borderRight: '7px solid ' + cardColor }}
                    iconStyle={{ background: dotColor, color: '#fff' }}
                >
                    <p>Full Stack Engineer<br /><i>Northwestern Mutual</i></p>
                    <ul>
                        {description['northwestern-mutual'].map(item =>
                            <li>{item}</li>
                        )}
                    </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>)
}

export default Experience;