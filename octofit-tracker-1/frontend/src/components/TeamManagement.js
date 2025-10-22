import React from 'react';
import { Table, Button, Card } from 'react-bootstrap';

const TeamManagement = () => {
    const teams = [
        { id: 1, name: 'Team Alpha', members: 5 },
        { id: 2, name: 'Team Beta', members: 3 },
        { id: 3, name: 'Team Gamma', members: 4 },
    ];

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Team Management</h1>
            <Card>
                <Card.Body>
                    <Card.Title>Teams Overview</Card.Title>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Members</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teams.map(team => (
                                <tr key={team.id}>
                                    <td>{team.id}</td>
                                    <td>{team.name}</td>
                                    <td>{team.members}</td>
                                    <td>
                                        <Button variant="primary" className="me-2">View</Button>
                                        <Button variant="danger">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamManagement;