import React from 'react';
import '../App.css';

// Prebuilt
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

// components
import Header from '../components/Header/';
import Description from '../components/Description';
import WordCloud from '../components/WordCloud';
import ThoughtGallery from '../components/ThoughtGallery/';
import Loading from '../components/Loading/';
import Footer from '../components/Footer';



const App = ({ handleClick, allDisplayed }) => {

  return (
    <Container fluid>
      <Header />
      <Description />
      {/* wrap with Loading component so user sees loading spinner while waiting for response from the API */}
      <Loading >
        <WordCloud />
        <ThoughtGallery />
        { !allDisplayed ?
          <div className="d-flex justify-content-center mb-2">
          <Button 
            onClick={ () => handleClick() } 
          >
            Load More...
          </Button>
        </div>
        : null
        }
      </Loading>
      <Footer/>
    </Container>
  );
}

export default App;
