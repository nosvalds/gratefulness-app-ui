import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form'

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
                                    aria-label="edit"
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
                                    aria-label="delete"
                                >
                                    &#10006;
                                </Button>
                            </ButtonGroup>
                        </Card.Footer>
                    </Card>)
                ))
            }
            <Card>
                <Form>
                    <Card.Body>
                        <Form.Group controlId="thoughtForm.ControlTextarea1">
                            <Form.Control 
                                aria-label="Grateful Thought" 
                                as="textarea" 
                                rows="5" 
                                placeholder="I'm grateful for..."
                            />
                        </Form.Group>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between">
                        <Form.Group 
                            controlId="thoughtForm.ControlAuthor1"
                            className="m-0"
                        >
                            <Form.Control 
                                aria-label="Author" 
                                size="sm" 
                                type="text" 
                                placeholder="author" 
                            />
                        </Form.Group>
                        <Button 
                            variant="outline-success"
                            size="sm"
                            type="submit"
                            className="ml-2 font-weight-bold"
                            aria-label="add"
                        >
                            &#65291;
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        </CardDeck>
    );
}

export default ThoughtGallery;