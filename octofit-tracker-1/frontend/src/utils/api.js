import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';

export const fetchActivities = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/activities/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching activities:', error);
        throw error;
    }
};

export const fetchUserProfile = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};

export const logActivity = async (activityData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/activities/`, activityData);
        return response.data;
    } catch (error) {
        console.error('Error logging activity:', error);
        throw error;
    }
};

export const fetchTeamData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/teams/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching team data:', error);
        throw error;
    }
};

export const fetchLeaderboard = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/leaderboard/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        throw error;
    }
};

export const fetchWorkoutSuggestions = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/workout-suggestions/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching workout suggestions:', error);
        throw error;
    }
};