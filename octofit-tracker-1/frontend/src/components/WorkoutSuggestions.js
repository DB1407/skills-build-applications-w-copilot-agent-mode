import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Row, Col } from 'reactstrap';

const WorkoutSuggestions = () => {
    const suggestions = [
        { title: 'Full Body Workout', description: 'A comprehensive workout targeting all major muscle groups.' },
        { title: 'Cardio Blast', description: 'High-intensity cardio session to boost endurance.' },
        { title: 'Strength Training', description: 'Focus on building strength with weights.' },
        { title: 'Yoga and Flexibility', description: 'Improve flexibility and relaxation through yoga.' },
    ];

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Personalized Workout Suggestions</h2>
            <Row>
                {suggestions.map((suggestion, index) => (
                    <Col key={index} sm="6" md="4" className="mb-4">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">{suggestion.title}</CardTitle>
                                <CardText>{suggestion.description}</CardText>
                                <Button color="primary">View Details</Button>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default WorkoutSuggestions;