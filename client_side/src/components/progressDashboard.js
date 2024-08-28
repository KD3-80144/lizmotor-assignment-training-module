import React from 'react';
import '../styles/styles.css';

function ProgressDashboard() {
  const progress = {
    completed: 2,
    total: 3,
  };

  const percentage = (progress.completed / progress.total) * 100;

  return (
    <div className="container">
      <div className="innerContainer">
        <h1>Progress Dashboard</h1>
        <p>You have completed {percentage}% of the training module.</p>
      </div>
    </div>
  );
}

export default ProgressDashboard;
