import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from './Images/Image1.jpg';
import Image2 from './Images/Image2.jpg';
import Image3 from './Images/Image3.jpg';
import Image4 from './Images/Image4.jpg';
import Image5 from './Images/Image5.jpg';
import Image6 from './Images/Image6.jpg';
import Button from 'react-bootstrap/Button';




function ShowMovies(){
    const imageMap = {Image1:Image1, Image2:Image2, Image3:Image3, Image4:Image4, Image5:Image5, Image6:Image6,};
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetchMovieDetails();
    }, []);

    const fetchMovieDetails = async () => {
        try {
          const response = await axios.get('http://3.84.253.136:8000/api/movies/');
          setDetails(response.data);
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
    };

    return(
      <div>
      <Container>
        <Row>
          {details.map((detail, index) => (
            <Col key={index} xs={12} md={4} lg={4}>
              <Card className="mb-4">
                <Card.Img variant="top" src={imageMap[detail.image]} />
                <Card.Body>
                  <Card.Title><center><div className='TitleHolder'>{detail.title}</div></center></Card.Title>
                  <Card.Text>
                    <center><Button href={detail.link} variant='outline-primary' size="lg">WATCH</Button></center>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>          
      </div>
    );
}

export default ShowMovies;