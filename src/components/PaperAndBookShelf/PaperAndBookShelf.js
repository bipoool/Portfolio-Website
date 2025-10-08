import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./Cards";
import Particle from "../Particle";
import cleanCode from "../../Assets/Books/clean-code.jpeg";
import dataIntensiveApplications from "../../Assets/Books/data-intensive-applications.jpeg";
import concurrencyInGo from "../../Assets/Books/concurrency-in-go.jpeg";

function PaperAndBookShelf() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Book <strong className="purple">Shelf </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are few books which I've read recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cleanCode}
              isPaper={false}
              title="Clean Code"
              target="_blank"
              description="'Clean Code' by Robert C. Martin is a must-read for developers, emphasizing writing readable, maintainable, and efficient code. It covers best practices, code smells, and refactoring techniques to help engineers craft high-quality software."
              ghLink="https://www.amazon.in/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataIntensiveApplications}
              isPaper={false}
              title="Designing Data-Intensive Applications"
              target="_blank"
              description="'Designing Data-Intensive Applications' by Martin Kleppmann explores the principles behind scalable, reliable, and maintainable data systems. It covers databases, distributed systems, and data processing, making it essential for engineers building modern applications."
              ghLink="https://www.amazon.in/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/9352135245"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={concurrencyInGo}
              isPaper={false}
              title="Concurrency in Go"
              target="_blank"
              description="'Concurrency in Go' by Katherine Cox-Buday provides a deep dive into Go’s concurrency model, covering patterns, best practices, and real-world applications. It’s an essential guide for developers looking to write efficient and scalable concurrent programs in Go."
              ghLink="https://www.amazon.in/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/9352135245"
            />
          </Col>
        </Row>

      </Container>
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Paper </strong> Shelf
        </h1>
        <p style={{ color: "white" }}>
          Here are few research papers which I've read recently recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isPaper={true}
              title="The Google File System"
              target="_blank"
              description="'The Google File System' by Sanjay Ghemawat, Howard Gobioff, and Shun-Tak Leung introduces GFS, a scalable, distributed file system designed for large-scale data processing. It emphasizes fault tolerance, high throughput, and efficient handling of massive workloads, laying the foundation for modern big data storage systems."
              ghLink="https://drive.google.com/file/d/1OG_BfZx1qz5UAPLzXwcbxMpenG5BL0q2/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isPaper={true}
              title="MyRocks: LSM-Tree Database Storage Engine"
              target="_blank"
              description="MyRocks, a new MySQL storage engine, was built on top of RocksDB by adding relational capabilities. With MyRocks, using the RocksDB API, significant efficiency gains were achieved while still benefiting from all the MySQL features and tools."
              ghLink="https://drive.google.com/file/d/1jlBGA2hZUMgTa3mGJduswIHJ-L1wxTKX/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default PaperAndBookShelf;
