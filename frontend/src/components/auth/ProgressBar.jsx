import React from 'react';

const ProgressBar = ({ step, totalSteps }) => {
  return (
    <div className="progress-bar">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`progress-step ${index < step ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;