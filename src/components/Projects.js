import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import koa from "../assets/img/koa2 .png"
import apple from '../assets/img/apple.png'
import youreach from '../assets/img/youreach.png'
import weather from '../assets/img/weather.png'
import portfolio from '../assets/img/portfolio.png'
import todolist from '../assets/img/todolist.png'
export const Projects = () => {

  const projects = [
    {
      title: "Cafe Management System",
      description: "A group project built with the MERN stack ,featuring table-specific food ordering and an admin dashboard for managing orders",
      imgUrl: koa,
    },
    {
      title: "Apple Website Clone",
      description: "An ongoing project built with React, replicating the design and functionality of the official Apple website.",
      imgUrl: apple,
    },
    {
      title:  "YouReach -My Business Startup Website",
      description: "A professional website designed and developed to showcase business services and attract clients.",
      imgUrl: youreach,
    },
    {
      title: "Weather App",
      description:  "A React-based weather application ",
      imgUrl: weather,
    },
    {
      title:"Portfolio Website",
      description: "A personal portfolio website built using HTML, CSS, and JavaScript to showcase my projects and skills.",
      imgUrl: portfolio,
    },
    {
      title: "To-Do List App",
      description:"A Normal to do list mobile app built with React Native to help manage tasks and improve my mobile app development skills.",
      imgUrl: todolist,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Me</h2>
                  <p>I’m a third-year BCA student at MSU, passionate about technology and creativity. I have hands-on experience with React, JavaScript, and native HTML & CSS, and I’m also familiar with Node.js. Alongside my technical skills, I’m a content creator with over 300k followers on Instagram</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">content creator</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I’m a content creator with over 300,000 followers on Instagram, where I share my love for movies and songs. I create engaging reels and posts, from recommending great films to highlighting amazing music. It’s a passion that lets me connect with people who enjoy entertainment as much as I do!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I am a third-year BCA student at MSU Baroda, where I am learning computer science and software development. I have gained skills in programming languages like Java, Python, and JavaScript, and have experience with web development technologies such as HTML, CSS, React, and Express. I am passionate about applying these skills to real-world projects and excited to continue learning and growing in the tech field.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
