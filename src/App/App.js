import React from 'react';
import '../App.css';

import Container from 'react-bootstrap/Container'
import Header from '../components/Header/';
import Description from '../components/Description';
import WordCloud from '../components/WordCloud';
import ThoughtGallery from '../components/ThoughtGallery/';
import Loading from '../components/Loading/';
import Footer from '../components/Footer';


function App() {
  return (
    <Container fluid>
      <Header />
      <Description />
      {/* wrap with Loading component so user sees loading spinner while waiting for response from the API */}
      <Loading >
        <WordCloud />
        <ThoughtGallery />
      </Loading>
      <Footer/>
    </Container>
  );
}

export default App;
