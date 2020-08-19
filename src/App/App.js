import React from 'react';
import '../App.css';

import Container from 'react-bootstrap/Container'
import Header from '../components/Header';
import ThoughtGallery from '../components/ThoughtGallery/';


function App() {
  return (
    <Container fluid>
      <Header />
      <ThoughtGallery />
    </Container>
  );
}

export default App;
