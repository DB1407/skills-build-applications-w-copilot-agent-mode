# Copilot Agent Instructions for Octofit Tracker

## Overview
Octofit Tracker is a full-stack fitness app with a Django REST backend (MongoDB via Djongo) and a React frontend (Bootstrap UI). It supports user authentication, activity logging, team management, leaderboards, and workout suggestions.

## Architecture
- **Backend:**
  - Located in `octofit-tracker/backend/octofit_tracker/`
  - Django REST API, models in `models.py`, viewsets in `views.py`, routes in `urls.py`
  - Uses Djongo to connect Django ORM to MongoDB (see `settings.py`)
  - Key models: `User`, `Team`, `Activity`, `Workout`, `Leaderboard`
  - API endpoints: `/api/users/`, `/api/teams/`, `/api/activities/`, `/api/workouts/`, `/api/leaderboard/`
- **Frontend:**
  - Located in `octofit-tracker/frontend/` or `octofit-tracker-1/frontend/`
  - React app, main entry: `src/App.js`, API calls in `src/utils/api.js`
  - Uses Bootstrap for styling
  - Components: `Navbar`, `Dashboard`, `Profile`, `ActivityLog`, `TeamManagement`, `Leaderboard`, `WorkoutSuggestions`, `Modal`

## Developer Workflows
- **Backend:**
  - Install Python deps: `pip install -r requirements.txt` (in `backend/`)
  - Run server: `python manage.py runserver 0.0.0.0:8000` (default port 8000)
  - MongoDB must be running locally on port 27017
  - Use Django ORM for all DB access (no direct MongoDB scripts)
- **Frontend:**
  - Install deps: `npm install` (in `frontend/`)
  - Start dev server: `npm start` (default port 3000)
  - API base URL is set via `REACT_APP_API_BASE_URL` (defaults to `http://localhost:8000/api`)

## Conventions & Patterns
- All backend models use `ObjectIdField` as primary key for MongoDB compatibility
- API endpoints follow RESTful conventions and are auto-routed via DRF viewsets
- Frontend API calls use `axios` in `src/utils/api.js` and expect REST responses
- Bootstrap is used for all UI components; maintain consistent styling
- CORS is enabled for all origins in development (`settings.py`)

## Integration Points
- React frontend communicates with Django backend via REST API endpoints
- Environment variable `REACT_APP_API_BASE_URL` can be set for API base URL
- Backend expects MongoDB running locally; DB name is `octofit_db`

## Examples
- To fetch activities: `GET /api/activities/` (see `api.js`)
- To log an activity: `POST /api/activities/` with JSON body
- To fetch leaderboard: `GET /api/leaderboard/`

## References
- Backend: `octofit-tracker/backend/octofit_tracker/`
- Frontend: `octofit-tracker/frontend/` or `octofit-tracker-1/frontend/`
- API utilities: `src/utils/api.js`

---
For any new features, follow the existing REST/React/Bootstrap patterns and update this file with new conventions as they emerge.
