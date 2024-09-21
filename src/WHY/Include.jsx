import React from 'react';
import AssessmentSummary from './AssessmentSummary';
import PerformanceChart from './PerformanceChart';

const Include = () => {
  return (
<<<<<<< HEAD
    <div className="dashboard-container">
=======
    <div className="dashboard-container w-full box-border">
>>>>>>> fe76c85bb0dcbdfbcfc082d21526b1ee7f309e53
      {/* <h1>Dashboard</h1> */}
      <section className="overview">
        <AssessmentSummary />
        <PerformanceChart />
      </section>
      {/* Other dashboard sections such as Recent Activities and Feedback Summary */}
    </div>
  );
};

export default Include;
