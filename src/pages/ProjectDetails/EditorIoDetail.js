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
            A Scalable Hadoop MapReduce Approach for Analyzing Historical Tsunami Events
            </h2>
            <p><strong >Course:</strong> CS750 – Distributed Data Management</p>
            <p><strong >Assignment:</strong> Lab Assignment 3</p>
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
                This study presents a Hadoop-based framework for efficiently analyzing large tsunami datasets using HDFS and MapReduce. 
                It enables scalable processing of data, including cleaning, filtering, and aggregation to compute key statistics such as tsunami frequency, wave heights, and seismic correlations. 
                The approach demonstrates how big data technologies can extract actionable insights for disaster and risk assessment.
                </Card.Text>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <Button variant="secondary" href="/DDM_LAB_SHAIK_SOHAIL_3.pdf" download>
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

        
        {/* About the Project */}
        <Row className="mb-4">
          <Col style={{ textAlign: "left" }}>
            <h4 style={styles.sectionHeading}>About the Project</h4>
            <p>
              <strong className="purple">Problem Statement:</strong>  
              Tsunamis have caused catastrophic destruction across various regions. With massive amounts of historical data being recorded, there is a growing need for scalable systems to analyze patterns, frequencies, and impact factors. This project proposes a Hadoop-based distributed approach for analyzing tsunami records using the MapReduce framework.
            </p>
            <p>
              <strong className="purple">Motivation:</strong>  
              Traditional data processing techniques are inefficient when dealing with large datasets. By using Hadoop’s distributed architecture, we can efficiently perform statistical analysis on vast tsunami datasets and extract actionable insights for better disaster management.
            </p>
            <p>
              <strong className="purple">Objectives:</strong>
              <ul>
                <li>Use Hadoop HDFS and MapReduce to process large-scale tsunami datasets.</li>
                <li>Perform parallel computation to analyze wave heights, regions, and death tolls.</li>
                <li>Aggregate statistics such as most affected countries, yearly tsunami frequency, and peak intensity years.</li>
                <li>Provide scalable, reusable code for further analysis and extension with ML.</li>
              </ul>
            </p>
          </Col>
        </Row>
        {/* Architecture Section */}
        <Row className="mb-5">
          <Col>
            <h4 style={styles.sectionHeading}>System Architecture</h4>
            <p>
              The architecture follows a classic Hadoop-based MapReduce model. The historical tsunami dataset is uploaded into the Hadoop Distributed File System (HDFS). Map functions filter and categorize the data, while Reduce functions aggregate insights (like total deaths, average wave height, etc.). The system supports multi-node processing to ensure fault-tolerance and scalability.
            </p>
            <div className="text-center mt-3">
              <img
                src="/images/hadoop_architecture.png"
                alt="Hadoop MapReduce Architecture"
                style={{
                  width: "80%",
                  maxWidth: "900px",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
                }}
              />
            </div>
          </Col>
        </Row>

        {/* Methodology Section */}
        <Row className="mb-5" style={{ textAlign: "left" }}>
          <Col>
            <h4 style={styles.sectionHeading}>Methodology</h4>
            <ul style={styles.customList}>
              <li><strong>Step 1:</strong> Upload raw dataset (CSV) to Hadoop HDFS.</li>
              <li><strong>Step 2:</strong> Mapper function reads each line, parses columns like year, region, deaths, wave height.</li>
              <li><strong>Step 3:</strong> Emits key-value pairs (e.g., region → waveHeight).</li>
              <li><strong>Step 4:</strong> Reducer aggregates total deaths per region, average wave height per year, and frequency.</li>
              <li><strong>Step 5:</strong> Output files written back to HDFS and analyzed further using plotting tools (Python/Excel).</li>
            </ul>
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


        {/* Code & Execution Section */}
        <Row className="mb-5">
          <Col className="text-center">
            <h4 style={styles.sectionHeading}>Code & Execution</h4>
            <p>
              All code is implemented using Java MapReduce jobs inside the Hadoop ecosystem. The repo contains mapper and reducer classes, driver files, and sample input/output. You can reproduce the pipeline on any Hadoop-compatible environment.
            </p>
            <Button
              variant="dark"
              href="https://github.com/shaiksohail2k20/Hadoop-and-Map_Reduce"
              target="_blank"
            >
              🔗 View MapReduce Code on GitHub
            </Button>
          </Col>
        </Row>


        {/* Results & Visualizations */}
        <Row className="mb-5">
          <Col style={{ textAlign: "left" }}>
            <h4 style={styles.sectionHeading}>Results & Visualizations</h4>
            <p>
              After running the MapReduce jobs, results were analyzed and visualized. Some key findings:
            </p>
            <ul style={styles.customList}>
              <li>Japan and Indonesia were most frequently affected.</li>
              <li>The year 2004 showed peak wave height and casualties (Indian Ocean Tsunami).</li>
              <li>MapReduce jobs ran efficiently on multiple nodes with minimal data loss.</li>
            </ul>

            <h5 className="mt-4 text-center">📊 Analysis Visuals</h5>
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
              {[1, 2, 3, 4].map((n) => (
                <img
                  key={`mapreduce-result-${n}`}
                  src={`/images/mapreduce_result_${n}.png`}
                  alt={`MapReduce Result ${n}`}
                  style={{
                    width: "300px",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  }}
                />
              ))}
            </div>
          </Col>
        </Row>

        {/* Conclusion & Future Work */}
        <Row className="mb-5">
          <Col style={{ textAlign: "left" }}>
            <h4 style={styles.sectionHeading}>Conclusion & Future Work</h4>
            <p>
              This project successfully demonstrates the application of Hadoop’s MapReduce paradigm in analyzing large-scale natural disaster datasets. By parallelizing the analysis, we were able to extract meaningful insights in less time, proving the system's scalability.
            </p>
            <p>
              <strong className="purple">Future Work:</strong>
              <ul style={styles.customList}>
                <li>Automate real-time streaming of tsunami data using Apache Kafka.</li>
                <li>Integrate Spark for faster in-memory computation.</li>
                <li>Extend to multi-disaster datasets (e.g., earthquakes, floods).</li>
              </ul>
            </p>
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
