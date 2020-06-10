import React from 'react';
import Alert from 'react-bootstrap/Alert'
import CardDeck from 'react-bootstrap/CardDeck'
import ThoughtCard from '../ThoughtCard';
import NewCard from '../NewCard';

const ThoughtGallery = ({ thoughts }) => {
    return (
        <CardDeck>
            { thoughts.length === 0 ?
                <Alert variant="info">
                    There are no grateful thoughts yet!
                </Alert>
                : (thoughts.map((thought, i) => (
                    <ThoughtCard key={ i } index= { i } thought={ thought } />)
                ))
            }
            <NewCard />
        </CardDeck>
    );
}

export default ThoughtGallery;