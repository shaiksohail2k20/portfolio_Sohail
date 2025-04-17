import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Project Domain <strong className="purple">Tsunami </strong>
        </h1>
        <p style={{ color: "white" }}>
  <strong className="purple">Domain Overview:</strong> Tsunamis are powerful sea waves caused by undersea earthquakes, volcanic eruptions, or landslides. They can travel across entire ocean basins and cause massive destruction to coastal regions. Understanding historical tsunami data is essential for improving disaster preparedness, designing resilient infrastructure, and developing early warning systems to minimize loss of life and property.
</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Predicting Tsunami Impact Using Statistical Methods on Historical Tsunami Data"
              description="This study uses statistical methods to analyze historical tsunami data from NOAA to predict tsunami impacts. 
              By examining factors like earthquake magnitudes, wave heights, and geographical data, models can forecast outcomes such as wave height, damage levels, and affected populations.
              The goal is to enhance tsunami early warning systems, improve disaster preparedness, and reduce the societal and economic impact of tsunamis."
              ghLink="https://github.com/shaiksohail2k20/Statistical_Methods_Tsunami"
              // Removed demoLink, using navigate
              onClick={() => navigate(`/project/chatify`)}
              id="chatify" // Pass id to use it in routing
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AI-Driven Tsunami Impact Analysis: A Statistical and Machine Learning Approach"
              description="This approach uses statistical methods and machine learning to analyze historical tsunami data, aiming to predict the impact of future events. By analyzing key factors such as seismic activity, wave heights, and geographic information, AI models forecast outcomes like damage levels and affected populations. The goal is to improve early warning systems, enhance disaster preparedness, and minimize the economic and societal impact of tsunamis."
              ghLink="https://github.com/shaiksohail2k20/AI_Driven_Tsunami"
              // Removed demoLink, using navigate
              onClick={() => navigate(`/project/bits-of-code`)}
              id="bits-of-code" // Pass id to use it in routing
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="A Scalable Hadoop MapReduce Approach for Analyzing Historical Tsunami Events"
              description="This study presents a Hadoop-based framework for efficiently analyzing large tsunami datasets using HDFS and MapReduce. It enables scalable processing of data, including cleaning, filtering, and aggregation to compute key statistics such as tsunami frequency, wave heights, and seismic correlations. The approach demonstrates how big data technologies can extract actionable insights for disaster and risk assessment."
              ghLink="https://github.com/shaiksohail2k20/Hadoop-and-Map_Reduce"
              // Removed demoLink, using navigate
              onClick={() => navigate(`/project/editor-io`)}
              id="editor-io" // Pass id to use it in routing
            />
          </Col>

          {/* Add more project cards as needed */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;



















// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={chatify}
//               isBlog={false}
//               title="Chatify"
//               description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
//               ghLink="https://github.com/soumyajit4419/Chatify"
//               demoLink="https://chatify-49.web.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title="Bits-0f-C0de"
//               description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
//               ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
//               demoLink="https://blogs.soumya-jit.tech/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="Editor.io"
//               description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
//               ghLink="https://github.com/soumyajit4419/Editor.io"
//               demoLink="https://editor.soumya-jit.tech/"              
//             />
//           </Col>

//           {/* <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="Plant AI"
//               description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
//               ghLink="https://github.com/soumyajit4419/Plant_AI"
//               demoLink="https://plant49-ai.herokuapp.com/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={suicide}
//               isBlog={false}
//               title="Ai For Social Good"
//               description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//               ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
//               // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="Face Recognition and Emotion Detection"
//               description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
//               Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
//               ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
//               // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
//             />
//           </Col> */}
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;
