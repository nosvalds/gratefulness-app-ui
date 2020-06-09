import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const ThoughtGallery = ({ thoughts, handleDelete }) => {
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
                        <Card.Footer className="d-flex justify-content-between">
                            { thought.author }
                            <ButtonGroup>
                                <Button 
                                    variant="outline-secondary"
                                    size="sm"
                                >
                                    Edit
                                </Button>
                                <Button 
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={ () => handleDelete({ 
                                        type: "REMOVE_THOUGHT",
                                        index: i,
                                    })}
                                >
                                    &#10006;
                                </Button>
                            </ButtonGroup>
                        </Card.Footer>
                    </Card>)
                ))
            }
        </CardDeck>
    );
}

export default ThoughtGallery;