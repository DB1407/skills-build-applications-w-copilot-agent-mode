import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import ActivityLog from './components/ActivityLog';
import TeamManagement from './components/TeamManagement';
import Leaderboard from './components/Leaderboard';
import WorkoutSuggestions from './components/WorkoutSuggestions';
import Modal from './components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="container mt-4">
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/activity-log" component={ActivityLog} />
                        <Route path="/team-management" component={TeamManagement} />
                        <Route path="/leaderboard" component={Leaderboard} />
                        <Route path="/workout-suggestions" component={WorkoutSuggestions} />
                    </Switch>
                </div>
                <Modal />
            </div>
        </Router>
    );
}

export default App;