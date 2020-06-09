import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const ThoughtGallery = ({ thoughts }) => {
    return (
        <CardDeck>
            { thoughts.length === 0 ?
                <Alert variant="info">
                    There are no grateful thoughts yet!
                </Alert>
                : (thoughts.map((thought, i) => (
                    <Card key={ i } >
                        <Card.Body>
                            <Card.Text>
                                { thought.content }
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            { thought.author }
                        </Card.Footer>
                    </Card>)
                ))
            }
        </CardDeck>
    );
}

export default ThoughtGallery;