# Octofit Tracker React App

## Overview
The Octofit Tracker is a fitness application built with React that allows users to track their activities, manage teams, and receive personalized workout suggestions. The app features user authentication, a competitive leaderboard, and a user-friendly interface styled with Bootstrap.

## Project Structure
The project is organized as follows:

```
octofit-tracker/
└── frontend/
    ├── public/
    │   ├── index.html        # Main HTML file for the React application
    │   └── favicon.ico       # Favicon for the application
    ├── src/
    │   ├── App.js            # Main component setting up routing and layout
    │   ├── index.js          # Entry point for the React application
    │   ├── components/       # Contains all React components
    │   │   ├── Navbar.js     # Navigation menu component
    │   │   ├── Dashboard.js   # Main dashboard view
    │   │   ├── Profile.js     # User profile information
    │   │   ├── ActivityLog.js  # Log of user activities
    │   │   ├── TeamManagement.js # Team management functionalities
    │   │   ├── Leaderboard.js  # Competitive leaderboard
    │   │   ├── WorkoutSuggestions.js # Personalized workout suggestions
    │   │   └── Modal.js       # Bootstrap modal component
    │   ├── App.css           # Custom CSS styles
    │   └── utils/
    │       └── api.js        # Utility functions for API calls
    ├── package.json           # npm configuration file
    └── README.md              # Documentation for the project
```

## Installation
To set up the Octofit Tracker React app, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd octofit-tracker/frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

## Usage
Once the application is running, you can access it in your web browser at `http://localhost:3000`. The app includes the following features:

- **User Authentication**: Users can create accounts and log in to access their profiles.
- **Activity Logging**: Users can log their activities and view them in a structured format.
- **Team Management**: Users can create and manage teams, inviting others to join.
- **Leaderboard**: A competitive leaderboard displays user rankings based on their activities.
- **Workout Suggestions**: Personalized workout suggestions are provided based on user preferences.

## Styling
The application uses Bootstrap for consistent styling across all components, including tables, buttons, headings, links, navigation menus, forms, cards, and modals. Ensure that all components adhere to Bootstrap's layout guidelines for a cohesive user experience.

## Contributing
Contributions to the Octofit Tracker project are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.