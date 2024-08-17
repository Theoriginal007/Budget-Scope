import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="stats">
        <div className="stat-box">
          <h3>Ksh 43 Million</h3>
          <p>Openning Balance</p>
        </div>
        <div className="stat-box">
          <h3>Ksh 600 Billion </h3>
          <p>revious Arrears</p>
        </div>
        <div className="stat-box">
          <h3>Ksh 7 Trillion</h3>
          <p>Total Balance Allocation</p>
        </div>
        <div className="stat-box">
          <h3>Ksh 95 Million</h3>
          <p>Daily Spendings</p>
        </div>
        <div className="stat-box">
          <h3>21</h3>
          <p>Minitries</p>
        </div>
      </div>
      <div className="charts">
        <div className="chart">Chart 1</div>
        <div className="chart">Chart 2</div>
      </div>
      <div className="activity">
        <h3>Development Activity</h3>
        <ul>
          <li>Ronald Bradley - Initial commit - May 6, 2018</li>
          <li>Russell Gibson - Main structure - April 22, 2018</li>
          <li>Beverly Armstrong - Left sidebar adjustments - April 15, 2018</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
