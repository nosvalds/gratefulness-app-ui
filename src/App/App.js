import React from 'react';
import '../App.css';

import Container from 'react-bootstrap/Container'
import Header from '../components/Header/';
import WordCloud from '../components/WordCloud';
import ThoughtGallery from '../components/ThoughtGallery/';
import Loading from '../components/Loading/';


function App() {
  return (
    <Container fluid>
      <Header />
      {/* wrap with Loading component so user sees loading spinner while waiting for response from the API */}
      <Loading >
        <WordCloud />
        <ThoughtGallery />
      </Loading>
    </Container>
  );
}

export default App;
