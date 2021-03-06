import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ThoughtCard = ({ index, thought, handleDelete, handleEditIndex }) => (
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
                    onClick={ () => handleEditIndex({ index })}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button 
                    variant="outline-danger"
                    size="sm"
                    onClick={ () => handleDelete({
                        index, 
                        id: thought.id
                     })}
                    aria-label="delete"
                >
                    <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
            </ButtonGroup>
        </Card.Footer>
    </Card>
)

export default ThoughtCard;