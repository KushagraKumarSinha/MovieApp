import React, { useState} from 'react';
import axios from 'axios';
import './App.css'
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function ShowRec(){

    const [movieName, setMovieName] = useState('');
    const [movieLink, setMovieLink] = useState('');

    const addMovie = async () => {
        const response = await axios.post('http://3.84.253.136:8000/api/suggest/add',
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

    return(
    <div>
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

export default ShowRec;