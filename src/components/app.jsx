import React from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router';
import HomePage from './pages/homePage';
import ExercisesPage from './pages/exercisePage';
import WorkoutSessionsPage from './pages/workoutSessionsPage';
import NoMatchPage from './pages/noMatchPage';
import './app.css';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="xrcise-navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/exercises">Exercises</Link></li>
            <li><Link to="/workout-sessions">Workout sessions</Link></li>
          </ul>
        </nav>

        <section className="xrcise-content-container">
          <Match exactly pattern="/" component={HomePage} />
          <Match pattern="/exercises" component={ExercisesPage} />
          <Match pattern="/workout-sessions" component={WorkoutSessionsPage} />

          <Miss component={NoMatchPage} />
        </section>
      </div>
    </BrowserRouter>
  );
}
