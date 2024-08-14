import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale
} from 'chart.js';
import { Bar, Pie, Line, Doughnut, Radar, PolarArea,Scatter, Bubble  } from 'react-chartjs-2';
import './Analytics.css';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale
);

const Analytics = () => {
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Number of Applications',
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.8)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const pieData = {
    labels: ['Placed', 'Not Placed'],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Number of Interviews',
        backgroundColor: 'rgba(153,102,255,0.6)',
        borderColor: 'rgba(153,102,255,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(153,102,255,0.8)',
        hoverBorderColor: 'rgba(153,102,255,1)',
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };

  const doughnutData = {
    labels: ['Google', 'Meta', 'Microsoft', 'Amazon', 'Others'],
    datasets: [
      {
        data: [150, 100, 75, 50, 125],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const radarData = {
    labels: ['Communication', 'Technical Skills', 'Teamwork', 'Problem-solving', 'Creativity', 'Work Ethic'],
    datasets: [
      {
        label: 'Skills Assessment',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55],
      },
    ],
  };

  const polarAreaData = {
    labels: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'],
    datasets: [
      {
        data: [120, 90, 75, 60, 110],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const mixedData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Number of Applications',
        type: 'bar',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
      {
        label: 'Number of Interviews',
        type: 'line',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: '#742774',
        backgroundColor: '#742774',
      },
    ],
  };

  const scatterData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Success Rate',
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 10 },
          { x: 20, y: 30 },
          { x: 25, y: 20 },
          { x: 30, y: 40 },
          { x: 35, y: 25 },
          { x: 40, y: 30 },
        ],
      },
    ],
  };

  const bubbleData = {
    datasets: [
      {
        label: 'Job Applications',
        data: [
          { x: 20, y: 30, r: 15 },
          { x: 40, y: 10, r: 10 },
          { x: 25, y: 40, r: 25 },
          { x: 35, y: 20, r: 5 },
          { x: 50, y: 30, r: 20 },
        ],
        backgroundColor: 'rgba(255,99,132,0.6)',
        hoverBackgroundColor: 'rgba(255,99,132,1)',
      },
    ],
  };

  return (
    <div className="analytics-container">
     
      <div className="chart-row">
        <div className="chart-container">
          <h3>Applications Over Time</h3>
          <Bar data={barData} />
        </div>
        <div className="chart-container">
          <h3>Placement Status</h3>
          <Pie data={pieData} />
        </div>
        <div className="chart-container">
          <h3>Interviews Over Time</h3>
          <Line data={lineData} />
        </div>
      </div>
      <div className="chart-row">
        <div className="chart-container">
          <h3>Placements by Company</h3>
          <Doughnut data={doughnutData} />
        </div>
        <div className="chart-container">
          <h3>Skills Assessment</h3>
          <Radar data={radarData} />
        </div>
        <div className="chart-container">
          <h3>Departments Overview</h3>
          <PolarArea data={polarAreaData} />
        </div>
      </div>
      <div className="chart-row">
        <div className="chart-container">
          <h3>Mixed Data</h3>
          <Bar data={mixedData} />
        </div>
        <div className="chart-container">
          <h3>Success Rate</h3>
          <Scatter data={scatterData} />
        </div>
        <div className="chart-container">
          <h3>Job Applications</h3>
          <Bubble data={bubbleData} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
