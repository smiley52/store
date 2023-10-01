import React from 'react'
//import image from '../images/th.jpeg'
import classes from './Home.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from "react-bootstrap";
import card1 from '../images/card1.jpeg'
import card2 from '../images/card2.jpeg'
import card from '../images/card3.jpeg'

const Home = () => {
  return (
    <div>
      <div className = {classes.hello}>
      
      
      <div className = {classes.bold}>up to 30% off</div>
      <div className = {classes.bold1}>EXCLUSIVE</div>
      <div className = {classes.bold2}>new shoes</div>

      <Button href="/#shop">Shop now</Button> 
      

      {' '}
      </div>
      <div className={classes.featured}>
        Some of our featured/trending items
      </div>

      <Container className = {classes.container}>
        <Row>
          
          <Col md={4} className="project-card">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
              
          
          </Col>
          <Col md={4} className="project-card">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
              
          
          </Col>
          <Col md={4} className="project-card">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
              
          
          </Col>
          
          
        </Row>
      </Container>

      

    </div>
    
  )
}

export default Home