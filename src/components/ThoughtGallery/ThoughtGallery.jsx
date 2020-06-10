import React from 'react';
import Alert from 'react-bootstrap/Alert'
import CardColumns from 'react-bootstrap/CardColumns'
import ThoughtCard from '../ThoughtCard';
import NewCard from '../NewCard';

const ThoughtGallery = ({ thoughts }) => {
    return (
        <CardColumns>
            { thoughts.length === 0 ?
                <Alert variant="info">
                    There are no grateful thoughts yet!
                </Alert>
                : (thoughts.map((thought, i) => (
                    <ThoughtCard key={ i } index= { i } thought={ thought } />)
                ))
            }
            <NewCard />
        </CardColumns>
    );
}

export default ThoughtGallery;