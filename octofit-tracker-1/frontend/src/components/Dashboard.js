import React from 'react';
import { Card, Table, Button } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div className="container mt-4">
            <h1 className="mb-4">Dashboard</h1>
            <Card>
                <Card.Header as="h5">User Activity</Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Activity</th>
                                <th>Duration</th>
                                <th>Calories Burned</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Sample data, replace with actual data */}
                            <tr>
                                <td>2023-10-01</td>
                                <td>Running</td>
                                <td>30 mins</td>
                                <td>300</td>
                                <td>
                                    <Button variant="primary">Edit</Button>
                                    <Button variant="danger" className="ml-2">Delete</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2023-10-02</td>
                                <td>Cycling</td>
                                <td>45 mins</td>
                                <td>400</td>
                                <td>
                                    <Button variant="primary">Edit</Button>
                                    <Button variant="danger" className="ml-2">Delete</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Dashboard;