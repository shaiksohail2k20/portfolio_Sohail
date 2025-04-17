import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sohail Shaik</span> from{" "}
            <span className="purple">Surathkal, Mangalore</span>.
            <br />
            I am currently pursuing <b className="purple">M.Tech in Computer Science &amp; Engineering</b> (Roll No. 242CS033) at the National Institute of Technology Karnataka (NITK).
            <br />
            I completed my B.Tech from Sri Venkateswara University, Tirupati in 2023 with a CGPA of 8.34.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading research papers
            </li>
            <li className="about-activity">
              <ImPointRight /> Experimenting with ML &amp; statistical models
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new AI technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Statistics and algorithms together can change the world.”
          </p>
          <footer className="blockquote-footer">Sohail Shaik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
