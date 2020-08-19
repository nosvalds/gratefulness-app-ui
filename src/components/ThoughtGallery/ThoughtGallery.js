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
                : 
                <> 
                    {thoughts.map((thought, i) => {
                        return (thought.edit) ? 
                        <NewCard 
                            key={ i } 
                            index={ i } 
                            edit={ true } 
                            thought={ thought } 
                        />
                        : 
                        <ThoughtCard 
                            key={ i } 
                            index= { i } 
                            thought={ thought }
                        />
                    })}
                </>
            }
            <NewCard edit={ false }/>
        </CardColumns>
    );
}

export default ThoughtGallery;