import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Profile = () => {
    return (
        <div className="container mt-4">
            <Card>
                <Card.Header as="h5">User Profile</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicBio">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Tell us about yourself" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Profile;