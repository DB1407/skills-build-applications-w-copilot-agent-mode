import React from 'react';
import { Table } from 'react-bootstrap';

const ActivityLog = () => {
    const activities = [
        { id: 1, activity: 'Logged a workout', date: '2023-10-01' },
        { id: 2, activity: 'Joined a team', date: '2023-10-02' },
        { id: 3, activity: 'Completed a challenge', date: '2023-10-03' },
    ];

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Activity Log</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Activity</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map((activity) => (
                        <tr key={activity.id}>
                            <td>{activity.id}</td>
                            <td>{activity.activity}</td>
                            <td>{activity.date}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ActivityLog;