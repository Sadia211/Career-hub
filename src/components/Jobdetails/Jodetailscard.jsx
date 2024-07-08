// Jodetailscard.jsx
import React from 'react';

const Jodetailscard = ({job}) => {
  if (!job) {
    return null; // Handle the case when job data is not available yet
  }

  const { job_description } = job;
console.log(job)
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <p>{job_description}</p>
    </div>
  );
};

export default Jodetailscard;
