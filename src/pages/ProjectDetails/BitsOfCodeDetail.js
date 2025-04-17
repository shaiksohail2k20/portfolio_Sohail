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
            AI-Driven Tsunami Impact Analysis: A Statistical and Machine Learning Approach
            </h2>
            <p><strong >Course:</strong> CS750 – Distributed Data Management</p>
            <p><strong >Assignment:</strong> Lab Assignment 2</p>
            <p>By :<strong className="purple"> Shaik Sohail  </strong> (Roll No: 242CS033)</p>
          </Col>
        </Row>

        {/* Overview Section */}
        <Row className="mb-5">
          <Col>
            <Card className="text-center p-4 shadow" style={styles.overviewBox}>
              <Card.Body>
                <Card.Title><h4 className="purple">Overview</h4></Card.Title>
                <Card.Text>This approach uses statistical methods and machine learning to analyze historical tsunami data, aiming to predict the impact of future events. 
                    By analyzing key factors such as seismic activity, wave heights, and geographic information, AI models forecast outcomes like damage levels and affected populations.
                     The goal is to improve early warning systems, enhance disaster preparedness, and minimize the economic and societal impact of tsunamis.
                </Card.Text>
                <div className="d-flex justify-content-center gap-3 mt-3">
                  <Button variant="secondary" href="/DDM_LAB_SHAIK_SOHAIL_2.pdf" download>
                    📄 Full Paper
                  </Button>
                  <Button variant="outline-primary" href="https://github.com/shaiksohail2k20/AI_Driven_Tsunami" target="_blank">
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
            Tsunamis pose a severe threat to coastal populations due to their unpredictable nature and immense destructive power. Conventional modeling approaches often fall short in capturing the complex interactions among seismic, oceanographic, and geographic variables. This project addresses the problem through an artificial intelligence–driven framework, leveraging historical tsunami data to extract deep insights using statistical modeling and machine learning. The goal is to understand the multi-dimensional factors contributing to tsunami impact and improve predictive accuracy through AI-assisted analysis.
            </p>

            <p>
            <strong className="purple">Objectives:</strong>
            <ul>
                <li>To analyze tsunami-related parameters (e.g., magnitude, depth, location) using statistical techniques for feature selection and pattern recognition.</li>
                <li>To apply supervised machine learning models — including Support Vector Machines, Random Forest, and Neural Networks — for predicting key impact measures such as wave height and fatalities.</li>
                <li>To build an intelligent system that identifies high-risk zones and generates explainable predictions to aid disaster response teams.</li>
                <li>To visualize critical relationships and model outputs using interactive charts, heatmaps, and geospatial plots for better decision-making.</li>
            </ul>
            </p>

            <p>
            <strong className="purple">Real-World Impact:</strong>
            By incorporating artificial intelligence into tsunami data analysis, this project moves beyond traditional models to offer a more adaptive and scalable solution. The AI-powered predictions and statistical insights derived can empower policymakers, emergency planners, and coastal authorities with timely and actionable information. This work enhances the effectiveness of early warning systems, improves resource allocation for disaster management, and ultimately reduces human and economic vulnerability in high-risk regions.
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

        {/* Methodology / Approach Section */}
        <Row className="mb-5">
        <Col style={{ textAlign: "left" }}>
            <h4 style={styles.sectionHeading}>Methodology & AI Approach</h4>
            <p>
            The project follows a systematic AI-driven pipeline that begins with preprocessing and extends through model evaluation. Here's a step-by-step breakdown:
            </p>
            <ul style={styles.customList}>
            <li><strong>Data Preprocessing:</strong> Missing values were handled using imputation techniques; features were normalized and cleaned to eliminate noise.</li>
            <li><strong>Exploratory Data Analysis:</strong> Statistical summaries and visualizations were used to understand distribution and correlations between features such as magnitude, wave height, and death toll.</li>
            <li><strong>Feature Engineering:</strong> New features were derived, such as normalized wave impact index, distance from coast, and population density zones.</li>
            <li><strong>Model Selection:</strong> Multiple supervised learning models were trained and evaluated — including:</li>
            <ul>
                <li>Random Forest Classifier</li>
                <li>Support Vector Machine (SVM)</li>
                <li>Artificial Neural Network (ANN)</li>
            </ul>
            <li><strong>Evaluation Metrics:</strong> Accuracy, Precision, Recall, and F1-Score were used to measure model performance.</li>
            <li><strong>Visualization:</strong> Confusion matrices and geospatial plots were generated to highlight model effectiveness and real-world interpretability.</li>
            </ul>
        </Col>
        </Row>
        {/* AI System Architecture Section */}
        <Row className="mb-5">
        <Col>
            <h4 style={styles.sectionHeading}>AI System Architectures</h4>
            <p>
            The following diagrams illustrate the internal architecture and decision-making pipelines of the machine learning models used in the project. Each flow highlights how input features are processed, transformed, and used to generate predictions.
            </p>

            {/* 🔹 Random Forest Architecture */}
            <h5 className="mt-4 text-center purple">🌲 Random Forest Architecture</h5>

            <p className="text-center">
            The Random Forest model aggregates decisions from multiple decision trees built on different data subsets and feature combinations. It performs classification by majority voting, making it robust to overfitting and highly effective in handling nonlinear tsunami impact data.
            </p>
            <div className="text-center mt-3 mb-5">
            <img
                src="/images/architecture_random_forest.png"
                alt="Random Forest Architecture"
                style={{
                width: "80%",
                maxWidth: "250px",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
                }}
            />
            </div>

            {/* 🔹 Neural Network Algorithm Flowchart */}
            <h5 className="mt-4 text-center purple">🧠 Neural Network Algorithm Flowchart</h5>
            <p className="text-center">
            The Neural Network architecture simulates a sequence of neurons organized in input, hidden, and output layers. Each layer applies weighted transformations followed by non-linear activation functions, enabling the model to capture complex relationships between input features and tsunami outcomes.
            </p>
            <div className="text-center mt-3">
            <img
                src="/images/architecture_neural_network.png"
                alt="Neural Network Flowchart"
                style={{
                width: "80%",
                maxWidth: "250px",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
                }}
            />
            </div>
        </Col>
        </Row>

        {/* Code & Execution Section */}
        <Row className="mb-5">
        <Col style={{ textAlign: "left" }}>
            <h4 style={styles.sectionHeading}>Code & Execution</h4>
            <p>
            The project was implemented using Python, leveraging libraries such as <strong>Pandas</strong>, <strong>NumPy</strong>, <strong>Matplotlib</strong>, <strong>Seaborn</strong>, and <strong>Scikit-learn</strong>. Jupyter Notebooks were used for experimentation, and final results were documented in a reproducible format on Google Colab.
            </p>
            <p>
            The core logic includes data preprocessing, statistical visualization, feature correlation analysis, and training multiple machine learning models. Results were visualized using heatmaps, bar charts, and confusion matrices.
            </p>

            {/* 👇 Centered Buttons */}
            <div className="text-center mt-4">
            <Button
                variant="dark"
                href="https://github.com/shaiksohail2k20/AI_Driven_Tsunami"
                target="_blank"
                className="me-3"
            >
                🔗 View Code on GitHub
            </Button>
            <Button
                variant="outline-primary"
                href="https://colab.research.google.com/drive/1e4t0zjCLIS6SECCdTIpsPAbotaqjtM8F?usp=sharing"
                target="_blank"
            >
                🚀 Try it on Google Colab
            </Button>
            </div>
        </Col>
        </Row>



        {/* Results Section */}
        <Row className="mb-5">
        <Col>
            <h4 style={styles.sectionHeading}>Results & Visualizations</h4>
            <p>
            The following visualizations showcase the outcomes of our statistical and AI-driven analysis of historical tsunami data. They include comparison plots of model performance, confusion matrices to evaluate classification accuracy, and a correlation heatmap showing interdependencies among key features.
            </p>

            {/* 🔹 1. Comparison Graphs */}
            <h5 className="mt-5 text-center">📊 Model Comparison Plots</h5>
            <p className="text-center">
            These graphs compare the performance of multiple machine learning models on key metrics such as accuracy, precision, and recall. This helps identify the most effective algorithm for tsunami impact prediction.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
            {[1, 2, 3].map((n) => (
                <img
                key={`comparison-${n}`}
                src={`/images/comparison_${n}.png`}
                alt={`Comparison Plot ${n}`}
                style={{
                    width: "380px",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                }}
                />
            ))}
            </div>

            {/* 🔹 2. Confusion Matrices */}
            <h5 className="mt-5 text-center">🔄 Confusion Matrices (All Models)</h5>
            <p className="text-center">
            Confusion matrices reveal how accurately each model classifies tsunami event outcomes. Each matrix shows the counts of true positives, false positives, true negatives, and false negatives.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <img
                key={`confusion-${n}`}
                src={`/images/confusion_${n}.png`}
                alt={`Confusion Matrix ${n}`}
                style={{
                    width: "250px",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                }}
                />
            ))}
            </div>

            {/* 🔹 3. Correlation Matrix */}
            <h5 className="mt-5 text-center">🔗 Correlation Matrix</h5>
            <p className="text-center">
            This correlation heatmap visualizes the linear relationships between different features in the dataset. Strong correlations can highlight which variables most influence tsunami impact.
            </p>
            <div className="text-center mt-3">
            <img
                src="/images/correlation_matrix.png"
                alt="Correlation Matrix"
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
