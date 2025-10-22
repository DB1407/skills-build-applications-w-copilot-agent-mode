import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { fetchLeaderboardData } from '../utils/api';

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const getLeaderboardData = async () => {
            const data = await fetchLeaderboardData();
            setLeaderboard(data);
        };

        getLeaderboardData();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center">Leaderboard</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((entry, index) => (
                        <tr key={entry.id}>
                            <td>{index + 1}</td>
                            <td>{entry.name}</td>
                            <td>{entry.score}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Leaderboard;