import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class NewCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: "",
            author: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e,value) {
        this.setState({ [value]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit({...this.state});
        this.setState({
            content: "",
            author: "",
        })
    }

    render() {
        const { content, author } = this.state;

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
        )
    }
}

export default NewCard;