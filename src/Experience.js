import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import "./Experience.css";

export const description = {
  pfizer: [
    "Designed, implemented, tested and softly released the web applications based on React, Redux, Webpack and Semantic UI",
    "Visualized, analyzed and mined large-scale dataset with d3.js, dc.js, and crossfilter.js",
    "Implemented the application backend based on Node.js, express.js and Solr",
    "Beautified and enhanced UI in current web applications",
    "Worked with Compliance department and implemented software applications under FDA regulations",
    "Introduced test-driven development and improved code quality and project consistence",
    "Raised further production funds for one business solution",
  ],
  "voya-financial": [
    "Built a financial enrollment tool",
    "Increased app customer rating into 8.4/10 (Top Rank 4)",
    "Increased team velocity by 300%",
    "Architecture Level Improvement: Marionette Events System, Component-based architecture, FLUX unidirectional architecture and data flow, BEM-based SASS architecture including layout, patterns, and helpers and customized SASS, Modern App View Layers",
    "Built responsive and adaptive web application for desktop and mobile screens",
    "Worked under Continuous Integration (CI) and Continuous Delivery (CD) using Git & Jenkins",
  ],
  "northwestern-mutual": [
    "Built a web-based financial mapping tool",
    "Designed and implemented Flux pattern with backbone.js",
    "Built reusable map and view components",
    "Implemented Google Maps JavaScript API and d3 map API to visually showing data on the map: markers, bubbles, polygons, polylines, data layers and spontaneous response to user interaction",
    "Built two hybrid mobile applications for iPhone, iPad and Android phone. Features: phone call, message and email, etc.",
    "Built the application backend with Node.js, express.js",
    "Implemented microservice architecture with Node.js, Express.js",
    "Worked under Scrum/Agile methodology",
  ],
};

// const cardColor = 'rgba(206, 238, 255, 0.6)'
const cardColor = "white";
const dotColor = "#ffc4c4";

const Experience = () => {
  return (
    <section id="experience" className="experience-container">
      <h2>Experience</h2>
      <VerticalTimeline animate={true}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: cardColor, borderRadius: "1rem" }}
          contentArrowStyle={{ borderRight: "7px solid " + cardColor }}
          iconStyle={{ background: dotColor, color: "#fff" }}
          date="March 2017 - January 2019"
        >
          <p>
            Senior Frontend Engineer
            <br />
            <i>Pfizer</i>
          </p>
          <ul>
            {description["pfizer"].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2016 - January 2017"
          contentStyle={{ background: cardColor, borderRadius: "1rem" }}
          contentArrowStyle={{ borderRight: "7px solid " + cardColor }}
          iconStyle={{ background: dotColor, color: "#fff" }}
        >
          <p>
            Senior Frontend Engineer <br />
            <i>Voya Financial</i>
          </p>
          <ul>
            {description["voya-financial"].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2015 - June 2016"
          contentStyle={{ background: cardColor, borderRadius: "1rem" }}
          contentArrowStyle={{ borderRight: "7px solid " + cardColor }}
          iconStyle={{ background: dotColor, color: "#fff" }}
        >
          <p>
            Full Stack Engineer
            <br />
            <i>Northwestern Mutual</i>
          </p>
          <ul>
            {description["northwestern-mutual"].map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
