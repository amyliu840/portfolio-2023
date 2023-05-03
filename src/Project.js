import React, { Component } from 'react';
import { Card, List } from 'semantic-ui-react';
import './Project.css';

function Project() {
  return (
    <div id="project" className="project-container">
      <h2>Projects</h2>
      <Card>
        <Card.Content>
          <Card.Header>Voya Enrollment</Card.Header>
          <Card.Description>Financial Enrollment Tool</Card.Description>
          <List bulleted>
            <List.Item>
              <a href="https://enroll.voya.com/"
                target="_blank" rel="noreferrer">Voya Enrollment Tool</a>
            </List.Item>
          </List>
        </Card.Content>
      </Card>
      <br />
      <Card>
        <Card.Content>
          <Card.Header>Car Dealer App</Card.Header>
          <Card.Description>An application to display dealer's cars</Card.Description>
          <List bulleted>
            <List.Item>
              <a href="https://github.com/amyliu840/car-dealer-app" target="_blank" rel="noreferrer">Project Github Link</a>
            </List.Item>
          </List>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Project;
