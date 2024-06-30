import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1>About Namma Kudla</h1>
          <p>
            Namma Kudla is a travel blog that aims to provide inspiring content and useful travel information to
            travelers. Our team of bloggers, guides, and administrators work together to create a platform where
            travelers can share their experiences, tips, and photos.
          </p>
          <p>
            Our mission is to promote sustainable tourism and cultural exchange between travelers and local
            communities. We believe that travel has the power to break down barriers and foster greater
            understanding between people from different backgrounds.
          </p>
          <p>
            On our blog, you'll find a wide range of articles and guides that cover various aspects of travel,
            including destination guides, cultural insights, and travel tips. We also feature personal travel
            stories and anecdotes from our community of travelers.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;