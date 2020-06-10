import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const ThoughtCard = ( {index, thought, handleDelete }) => (
    <Card>
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
                    onClick={ () => handleDelete({ index })}
                    aria-label="delete"
                >
                    &#10006;
                </Button>
            </ButtonGroup>
        </Card.Footer>
    </Card>
)

export default ThoughtCard;