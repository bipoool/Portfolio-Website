import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bugFix from "../../Assets/Projects/bugfix.png"
import github from "../../Assets/Projects/github.png"
import quadcopter from "../../Assets/Projects/quadcopter.png";
import snakeGame from "../../Assets/Projects/snakeGame.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects and open source contributions I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quadcopter}
              isOs={false}
              title="Quadcopter"
              target="_blank"
              description="Built a quadcopter in my 3rd year which has a range of 1Km, can go as high as a 10 story building and has a battery life of 22 minutes"
              ghLink="https://github.com/bipoool/quadcopter1.0.0.git"
              demoLink="https://drive.google.com/file/d/18aUoYhkS5CHxtcrA-IBtu8GfMJ_fd0eQ/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isOs={true}
              title="OS contribution - 1"
              target="_blank"
              description="Contributed in Spring-data couchbase. Made the bean propagation more efficient and removed unnecessary constructor calls."
              ghLink="https://github.com/spring-projects/spring-data-couchbase/issues/1850"
              demoLink="https://github.com/spring-projects/spring-data-couchbase/pull/1885"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bugFix}
              isOs={true}
              title="OS contribution - 2"
              target="_blank"
              description="Contributed in Spring-data couchbase. Fixed a bug which was introduced in v5"
              ghLink="https://github.com/spring-projects/spring-data-couchbase/issues/1876"
              demoLink="https://github.com/spring-projects/spring-data-couchbase/pull/1886"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakeGame}
              isOs={false}
              title="Snake Game"
              description="Just a small game I made for fun in free time. Click on Demo button to play, use W A S D keys to play"
              ghLink="https://github.com/bipoool/snakeGame"
              demoLink="/snake-game"
            />
          </Col>

        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
