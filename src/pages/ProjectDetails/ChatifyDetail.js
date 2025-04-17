import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Particle from "../../components/Particle";
import profImage from "../../Assets/Projects/professor.png"; // replace with actual path

import { useNavigate } from "react-router-dom";

function TsunamiProject() {
  const navigate = useNavigate();

  // Inline styles
  const styles = {
    pageContainer: {
      marginTop: "80px",
      paddingTop: "40px",
    },
    guidedImage: {
        width: "250px",
        borderRadius: "35%",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      },
    darkText: {
        color: "white",
      },
      
    sectionHeading: {
      fontWeight: 600,
      color: "#c0aaff",
      marginBottom: "20px",
    },
    overviewBox: {
      backgroundColor: "#2c1f4a",
      color: "white",
      borderRadius: "16px",
      border: "none",
    },
    glowLink: {
      color: "#9f7aea",
      fontWeight: "bold",
      textDecoration: "none",
    },
    glowLinkHover: {
      color: "#ffffff",
      textShadow: "0 0 8px #9f7aea",
    },
    customList: {
      paddingLeft: "20px",
    },
    resultImage: {
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      maxWidth: "100%",
    },
  };

  return (
    <Container fluid style={styles.pageContainer} >
      <Particle />
      <Container style={{ color: "white" }}>
        {/* Title Section */}
        <Row className="justify-content-center mb-4">
          <Col md={10} className="text-center">
            <h2 style={styles.sectionHeading}>
            Predicting Tsunami Impact Using Statistical Methods on Historical Tsunami Data
            </h2>
            <p><strong >Course:</strong> CS750 – Distributed Data Management</p>
            <p><strong >Assignment:</strong> Lab Assignment 1</p>
            <p>By :<strong className="purple"> Shaik Sohail  </strong> (Roll No: 242CS033)</p>
          </Col>
        </Row>

        {/* Overview Section */}
        <Row className="mb-5">
          <Col>
            <Card className="text-center p-4 shadow" style={styles.overviewBox}>
              <Card.Body>
                <Card.Title><h4 className="purple">Overview</h4></Card.Title>
                <Card.Text>
                This study uses statistical methods to analyze historical tsunami data from NOAA to predict tsunami impacts. By examining factors like earthquake magnitudes, wave heights,
                 and geographical data, models can forecast outcomes such as wave height, damage levels, and affected populations. The goal is to enhance tsunami early warning systems, improve disaster preparedness, and reduce the societal and economic impact of tsunamis.
                </Card.Text>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <Button variant="secondary" href="/DDM_LAB_SHAIK_SOHAIL.pdf" download>
                    📄 Full Paper
                  </Button>
                  <Button variant="outline-primary" href="https://github.com/shaiksohail2k20/Statistical_Methods_Tsunami" target="_blank">
                    🔗 GitHub Code
                  </Button>
                  <Button variant="outline-primary" href="https://www.kaggle.com/datasets/andrewmvd/tsunami-dataset" target="_blank">
                    🔗 Dataset
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* About Section */}
        <Row className="mb-4">
        <Col style={{ textAlign: "left" }}>
            <h4 style={styles.sectionHeading}>About the Project</h4>
            <p>
            <strong className="purple">Problem Statement:</strong> 
            The devastating consequences of tsunamis make it essential to understand their historical patterns and impact. However, due to the complexity of environmental and geological factors involved, accurate prediction and preparedness remain a challenge. In this project, we undertake a comprehensive statistical analysis of historical tsunami events to uncover trends, assess risk factors, and interpret impact severity using recorded data such as wave heights, fatalities, locations, and causes.
            </p>

            <p>
            <strong className="purple">Objectives:</strong>
            <ul>
                <li>To analyze historical tsunami data and identify patterns related to geographical and geological attributes.</li>
                <li>To quantify the relationship between seismic parameters and the magnitude of tsunami impacts.</li>
                <li>To derive statistical insights that can aid in understanding high-risk zones and potential damage scenarios.</li>
                <li>To visualize correlations and distributions of tsunami characteristics using appropriate charts and plots.</li>
            </ul>
            </p>

            <p>
            <strong className="purple"> Real-world Impact: </strong> 
             By interpreting historical data through statistical methods, this project contributes valuable insights that can support government agencies, disaster preparedness teams, and researchers. These findings can inform the development of better early warning systems, improve emergency planning strategies, and ultimately reduce human and economic losses in tsunami-prone regions.
            </p>
        </Col>
        </Row>


        {/* Dataset Section */}
        <Row className="mb-4">
        <Col style={{ textAlign: "left" }}>
        <h4 style={styles.sectionHeading}>Dataset & Source</h4>
        <p>
        The dataset used in this project is sourced from the NOAA/NGDC (National Centers for Environmental Information) historical tsunami archives and a curated dataset available on Kaggle. 
        These datasets include detailed records of past tsunami events, encompassing seismic activity, geographic origin, magnitude, affected regions, casualties, and damages. 
        The diverse and well-structured data forms the foundation for statistical analysis and meaningful insights.
        </p>
        <p>
        🔗{" "}
        <a
            href="https://www.kaggle.com/datasets/andrewmvd/tsunami-dataset"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-link"
        >
            View Dataset on Kaggle
        </a>
        </p> 
        </Col>
        </Row>


        {/* Colab Button */}
        <Row className="mb-4">
          <Col>
            <h4 style={styles.sectionHeading}>Code & Execution</h4>
            <p>We conducted statistical analysis using Python to explore and interpret the tsunami dataset.</p>
            <Button variant="dark" href="https://colab.research.google.com/drive/1blteWhHbAzTRB2MdHH0ITs9U5DS-J5C4" target="_blank">
              🚀 Open in Google Colab
            </Button>
          </Col>
        </Row>

        {/* Results Section */}
        <Row className="mb-5">
        <Col>
            <h4 style={styles.sectionHeading}>Results & Visualizations</h4>
            <p>Below are the results from our statistical analysis, represented through various visualizations.</p>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            {[...Array(10)].map((_, i) => (
                <img
                key={i}
                src={`/images/${i + 1}.png`}
                alt={`Statistical Result ${i + 1}`}
                style={{ width: "250px", height: "auto", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
                />
            ))}
            </div>
        </Col>
        </Row>
        {/* Guided By Section */}
        <Row className="mb-5 align-items-center">
        <Col md={8} style={{ textAlign: "left", paddingLeft: "100px" }}>
            <h4 style={styles.sectionHeading}>Guided By</h4>
            <p>
            <strong className="purple"> Dr. Chandrasekaran K</strong><br/>
            Professor (HAG), Department of Computer Science &amp; Engineering<br/>
            National Institute of Technology Karnataka, Surathkal<br/>
            <p><strong>Email:</strong> <a href="mailto:kch.nitk.edu.in">kch.nitk.edu.in</a></p>
            </p>
        </Col>
        <Col md={4} className="text-center" style={{ paddingRight: "100px" }}>
            <img
            src={profImage}
            alt="Professor Chandrasekaran K"
            style={styles.guidedImage}
            />
        </Col>
        </Row>

        {/* Contact Section */}
        <Row className="mb-5">
          <Col>
            <h4 style={styles.sectionHeading}>Contact</h4>
            <p><strong>Email:</strong> <a href="mailto:shaiksohail.242cs033@nitk.edu.in">shaiksohail.242cs033@nitk.edu.in</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shaik-sohail-ba05221a5/" target="_blank">@sohailshaik</a></p>
          </Col>
        </Row>

        {/* Back Button */}
        <Row>
          <Col className="text-start">
            <Button variant="outline-light" onClick={() => navigate(-1)}>
              ← Back
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default TsunamiProject;
