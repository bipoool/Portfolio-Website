import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bugFix from "../../Assets/Projects/bugfix.png"
import github from "../../Assets/Projects/github.png"
import Github from "./Github";
import quadcopter from "../../Assets/Projects/quadcopter.png";
import raspberryPi from "../../Assets/Projects/raspberryPi.png";
import linkShortener from "../../Assets/Projects/linkShortener.png";
import dicedbJava from "../../Assets/Projects/dicedbJava.png";
import diceDb from "../../Assets/Projects/dicedb.png"
import snakeGame from "../../Assets/Projects/snakeGame.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects and open source contributions I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dicedbJava}
              isOs={false}
              title="DiceDb Java SDK"
              target="_blank"
              description="Developed a Java SDK for DiceDB with full command support and reactivity. Implemented TCP-level connection pooling to optimize performance and resource management."
              ghLink="https://github.com/bipoool/dicedb-java"
              demoLink="https://github.com/bipoool/dicedb-java"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkShortener}
              isOs={false}
              title="Link Shortener"
              target="_blank"
              description="Shorten your URLs easily using our simple API powered by GOLANG, PostgreSQL & DiceDB(for caching) with a ready to deploy docker file"
              ghLink="https://github.com/bipoool/LinkShortener"
              demoLink="https://shtln.xyz/shortener/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raspberryPi}
              isOs={false}
              title="Rasberry PI - WebServer"
              target="_blank"
              description="Built my own web-server using raspberry-pi 4. This server hosts several websites and I also use it for testing and learning new tech."
              ghLink="https://vipulgupta.me"
              demoLink="https://vipulgupta.me"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diceDb}
              isOs={true}
              title="OS contribution - DiceDB"
              target="_blank"
              description="Multiple contributions in DiceDB. Resolved many bugs and implemented features"
              ghLink="https://github.com/DiceDB/dice/issues/1493"
              demoLink="https://github.com/DiceDB/dice/pulls?q=is\%3Apr+author\%3Abipoool+is\%3Aclosed"
            />
          </Col>

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

        <Row>
          <Github />
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
