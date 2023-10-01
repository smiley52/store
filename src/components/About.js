import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import classes from './about.module.css'
import Card from 'react-bootstrap/Card';
import image from '../images/about.jpeg'
import image2 from '../images/aboutt.jpeg'
import image3 from '../images/th.jpeg'
import Button from 'react-bootstrap/Button';

const About = () => {
  return (
    <div>
    
    <div className={classes.aboutus}>
      About us
    </div>
    
    <Container>
        <Row>
          
          <Col md={4} className="project-card">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      
    </Card>
              
          
          </Col>
          <Col md={4} className="project-card">
          <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Smart Life
With Smart Shoes</Card.Title>
        <Card.Text>
        
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmol tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minivel quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata non proident, sunt in culpa qui officia.
        </Card.Text>
        <Button href='/contact'>Contact us</Button>
      </Card.Body>
    </Card>
              
          
          </Col>
          
          
          
        </Row>
      </Container>



    </div>
  )
}

export default About