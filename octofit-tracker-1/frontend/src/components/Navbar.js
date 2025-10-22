import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Octofit Tracker</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/activity-log">Activity Log</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/team-management">Team Management</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/workout-suggestions">Workout Suggestions</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;