import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { SiLeetcode } from "react-icons/si"; // Add this to your imports
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
      <Col md={8} className="home-about-description">
        <h1 style={{ fontSize: "2.6em" }}>
          LET ME <span className="purple">INTRODUCE</span> MYSELF
        </h1>
        <p className="home-about-body">
          Hello! I’m <b className="purple">Sohail Shaik</b>, currently pursuing 
          <b className="purple"> M.Tech in Computer Science & Engineering</b> (Roll No. 242CS033) at 
          the <b className="purple">National Institute of Technology Karnataka, Surathkal</b>.
          <br /><br />
          My primary research is on <b className="purple">Predicting Tsunami Impact</b> using 
          statistical and machine‐learning techniques under CS750 – Distributed Data Management.
          <br /><br />
          I’m proficient in 
          <i><b className="purple"> C++, Python, JavaScript, Java</b></i> and tools/frameworks like 
          <i><b className="purple"> PySpark, Pandas, Scikit‑learn, React.js</b></i>.
          <br /><br />
          Aside from academics, I love building data‑driven web applications and exploring 
          environmental data challenges.
        </p>
      </Col>
      <Col md={4} className="myAvtar">
        <Tilt>
          <img src={myImg} className="img-fluid" alt="avatar" />
        </Tilt>
      </Col>
    </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shaiksohail2k20"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/SOHAIL02/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shaik-sohail-ba05221a5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shaiksohail2k20/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
