import React, { useState } from 'react';
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from 'react-router-dom';
import { GET_EVENT } from '../../utils/queries';
import { UPDATE_EVENT } from '../../utils/mutations';
import { Card, Container, Form, Button } from "react-bootstrap";

export default function SingleLesson() {
    // Use `useParams()` to retrieve value of the route parameter `/lesson/:id`
    const [updateEvent] = useMutation(UPDATE_EVENT);
    const { id } = useParams();
    // eslint-disable-next-line
    const { data } = useQuery(GET_EVENT, {
        // Pass the `_id` URL parameter into query to retrieve this event's data
        variables: { _id: id },
    });
    const event = data?.event || {};
    console.log(event);

    const [formState, setFormState] = useState({
        studentName: event.studentName,
        date: event.date,
        dayRef: event.dayRef,
        time: event.time,
        description: event.description,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleUpdate = async () => {
        try {
            await updateEvent({
                variables: {
                    _id: id
                }
            })
        } catch (err) {
            console.log(err);
        }

    };

    return (

        <Container>
            <Card>
                <Card.Header>
                    <h3>Update Lesson with {event.studentName} on {event.date}</h3>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group>
                            <Form.Control
                                as="input"
                                name="dayRef"
                                value={formState.dayRef}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                as="input"
                                name="time"
                                value={formState.time}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                as="input"
                                name="description"
                                value={formState.description}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button
                            className='my-2'
                            type='submit'
                            onClick={handleUpdate}
                        >
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
};
