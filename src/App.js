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

const imageMap = {Image1:Image1, Image2:Image2, Image3:Image3, Image4:Image4, Image5:Image5, Image6:Image6,};

function App() {
  const [details, setDetails] = useState([]);
  const [movieName, setMovieName] = useState('');
  const [movieLink, setMovieLink] = useState('');

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/movies/');
      setDetails(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const addMovie = async () => {
    const response = await axios.post('http://127.0.0.1:8000/api/suggest/add',
      {
        title: movieName,
        link: movieLink
      });

      setMovieLink('');
      setMovieName('');
  };

  const handleMovieNameChange = (event) => {
    setMovieName(event.target.value);
  };

  const handleMovieLinkChange = (event) => {
    setMovieLink(event.target.value);
  };

  return (
    <div className='App'>
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


      <Container>
        <div className='InputHolder'>
          <Row>
            <Col xs={12} md={1} lg={1}></Col>
            <Col xs={12} md={10} lg={10}>
              <Card border="light" bg="secondary">
                <Card.Body>
                  <Card.Title><center><div className='SuggessionTitle'>Want to Recommend a Movie?</div></center></Card.Title>
                  <Card.Text>
                    <center>
                      <div className='SuggessionName'><input type="text" placeholder="Movie Name" onChange={handleMovieNameChange}/></div>
                      <div className='SuggessionLink'><input type="text" placeholder="Link to the Movie" onChange={handleMovieLinkChange}/></div>
                      <div className='SuggessionButton'><Button variant='outline-light' size="lg" onClick={addMovie}>SUBMIT</Button></div>
                    </center>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={1} lg={1}></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;