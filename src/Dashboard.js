import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import './Dashboard.css'; // Add CSS file for styling
import budgetImage from './budget.jpeg'; // Import your image from src

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const exchangeRate = 140; // 1 USD = 140 KES

const totalBudgetKES = 3600000000000; // 3.6 trillion KSh

// Budget allocations (in KSh)
const budgetAllocations = {
  'Ministry of Finance': 500000000000,
  'National Treasury': 400000000000,
  'Office of the Controller of Budget': 300000000000,
  'Kenya Revenue Authority': 350000000000,
  'Public Service Commission': 200000000000,
  'State Department for Planning': 250000000000,
  'Ministry of Devolution and ASAL': 150000000000,
  'National Assembly Budget Office': 100000000000,
  'Ministry of Economic Planning': 180000000000,
  'Ministry of Health': 500000000000,
  'Ministry of Education': 600000000000,
  'Ministry of Agriculture': 250000000000,
  'Ministry of Transport': 300000000000,
  'Ministry of Energy': 200000000000,
  'Ministry of Water and Sanitation': 150000000000,
  'Ministry of Industrialization': 120000000000,
  'Ministry of Youth Affairs': 100000000000,
  'Ministry of Sports': 80000000000,
  'Ministry of Foreign Affairs': 70000000000,
  'Ministry of Defense': 450000000000,
  'Ministry of Interior and Coordination of National Government': 400000000000,
  'Ministry of Labor and Social Protection': 150000000000,
  'Ministry of Environment and Forestry': 200000000000,
  'Ministry of Tourism and Wildlife': 120000000000,
  'Ministry of Public Service and Gender': 100000000000,
  'Ministry of Culture and Heritage': 80000000000,
  'Ministry of Lands and Physical Planning': 150000000000,
  'Ministry of East African Community': 100000000000,
  'Ministry of ICT, Innovation and Youth Affairs': 200000000000,
  'Ministry of Cooperatives and MSME Development': 80000000000,
  'Ministry of Public Works and Roads': 250000000000,
  'Ministry of Information and Communication Technology': 150000000000,
  'Ministry of Petroleum and Mining': 200000000000,
  'Ministry of Trade, Investments and Industry': 180000000000,
  'Ministry of Transport and Infrastructure': 300000000000,
  'Ministry of Devolution and Planning': 150000000000,
  'Ministry of Water, Sanitation and Irrigation': 200000000000,
  'Ministry of Environment and Natural Resources': 180000000000,
  'Ministry of Agriculture, Livestock and Fisheries': 250000000000,
  'Ministry of National Heritage, Culture and Sports': 70000000000,
  'Ministry of Science and Technology': 100000000000,
  'Ministry of Development of Northern Kenya and Other Arid Lands': 120000000000,
};

// Format large numbers
const formatNumber = (number) => {
  if (number >= 1e12) {
    return (number / 1e12).toFixed(2) + ' Trillion';
  } else if (number >= 1e9) {
    return (number / 1e9).toFixed(2) + ' Billion';
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(2) + ' Million';
  } else {
    return number.toFixed(2);
  }
};

function Dashboard() {
  // State to manage chart data
  const [budgetData, setBudgetData] = useState([]);
  const [chartType, setChartType] = useState('bar');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setLoading(true);
    setTimeout(() => {
      setBudgetData(Object.entries(budgetAllocations).map(([entity, amount]) => ({ entity, amount })));
      setLoading(false);
    }, 1000);
  }, []);

  // Convert amounts to KES
  const convertToKES = amount => formatNumber(amount);

  // Aggregate data by category
  const categorizeExpenses = () => {
    return budgetData.reduce((acc, { entity, amount }) => {
      if (!acc[entity]) {
        acc[entity] = 0;
      }
      acc[entity] += amount;
      return acc;
    }, {});
  };

  const categoryData = categorizeExpenses();

  // Calculate total and average
  const totalSpending = budgetData.reduce((acc, { amount }) => acc + amount, 0);
  const averageSpending = totalSpending / budgetData.length;

  const data = {
    labels: budgetData.map(item => item.entity),
    datasets: [{
      label: 'Spending',
      data: budgetData.map(item => item.amount), // Use raw amounts for Chart.js
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: KSh ${formatNumber(context.raw)}`;
          }
        }
      }
    }
  };

  return (
    <div className="App-dashboard">
      <h2>Budget Overview</h2>
      <img src={budgetImage} alt="Budget Overview" className="dashboard-image" /> {/* Add image here */}
      {loading && <p>Loading data...</p>}
      {error && <p className="error-message">Error fetching data: {error.message}</p>}
      {!loading && !error && (
        <>
          <div className="Chart-controls">
            <button onClick={() => setChartType('bar')} className={chartType === 'bar' ? 'active' : ''}>Bar Chart</button>
            <button onClick={() => setChartType('line')} className={chartType === 'line' ? 'active' : ''}>Line Chart</button>
          </div>
          {chartType === 'bar' ? (
            <Bar data={data} options={options} />
          ) : (
            <Line data={data} options={options} />
          )}

          <div className="Category-summary">
            <h3>Expense Categories Summary</h3>
            <ul>
              {Object.entries(categoryData).map(([entity, amount], index) => (
                <li key={index}>
                  <span>{entity}</span> - <span>KSh {convertToKES(amount)}</span> - <span>{((amount / totalSpending) * 100).toFixed(2)}% of Total Spending</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="Total-Info">
            <h3>Overall Summary</h3>
            <p>Total Spending: <strong>KSh {convertToKES(totalSpending)}</strong></p>
            <p>Average Spending per Entity: <strong>KSh {convertToKES(averageSpending)}</strong></p>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
