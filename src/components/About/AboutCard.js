import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vipul Gupta </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am currently employed as a Senior Software Engineer at AdPushup.
            I have completed B.Tech from <span className="purple">Delhi Technological University.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gymming
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is a bug, don't fix it"{" "}
          </p>
          <footer className="blockquote-footer">Vipul</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
