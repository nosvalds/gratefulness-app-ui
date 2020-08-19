import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

class NewCard extends Component {
    constructor(props) {
        super(props);
        const { edit, thought } = this.props
        this.state = {
            content: edit ? thought.content : "",
            author: edit ? thought.author : "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e,value) {
        this.setState({ [value]: e.currentTarget.value })
    }

    handleSubmit(e) {
        const { edit, index, thought } = this.props;
        e.preventDefault();
        if (edit) { // if we're in edit mode call a different function, pass current state and index up
            this.props.handleUpdate({
                ...this.state,
                id: thought.id, // pass id now for API
                index
            })
        } else { // if we're in new mode, handle submit (new card), send state and then clear the form
            this.props.handleSubmit({...this.state});
            this.setState({
                content: "",
                author: "",
            })
        }
    }

    render() {
        const { content, author } = this.state;
        const { edit } = this.props;

        return (
            <Card>
                <Form onSubmit={ this.handleSubmit }>
                    <Card.Body>
                        <Form.Group controlId="thoughtForm.ControlTextarea1">
                            <Form.Control 
                                aria-label="Grateful Thought" 
                                as="textarea" 
                                rows="5" 
                                placeholder="I'm grateful for..."
                                value={ content }
                                onChange={ (e) => this.handleChange(e,"content") }
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
                                value={ author }
                                onChange={ (e) => this.handleChange(e,"author") }
                            />
                        </Form.Group>
                        <Button 
                            variant="outline-info"
                            size="sm"
                            type="submit"
                            className="ml-2 font-weight-bold"
                            aria-label="add or save"
                        >
                            { edit ? 
                                <FontAwesomeIcon icon={faSave} /> : 
                                <FontAwesomeIcon icon={faPlusSquare} /> }
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        )
    }
}

export default NewCard;