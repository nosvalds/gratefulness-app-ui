import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ThoughtCard from '../ThoughtCard';

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