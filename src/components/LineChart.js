import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

import {
  LinearChartIcon,
  OptionIcon,
  PieChartIcon,
  ThisMonthIcon,
  LastMonthIcon,
} from '../components/Icons';

const linechartData = {
  labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  datasets: [
    {
      label: '1',
      data: [3500, 5500, 5300, 3400, 4700, 3000, 5600],
      fill: false,
      borderColor: '#8EEAFF',
      tension: 0.1,
    },
    {
      label: '2',

      data: [2000, 1500, 3000, 2500, 4800, 2000, 4800],
      fill: false,
      borderColor: '#A684CB',
      tension: 0.1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    y: {
      display: true,
      suggestedMin: 1500,
      suggestedMax: 7000,
    },
  },
};

const LineChart = React.memo(() => {
  const [graphType, setGraphType] = useState('line');

  return (
    <>
      <div className='graph graph1'>
        <div className='graphHeader'>
          <h3>Earnings</h3>
          <div className='iconContainer'>
            <LinearChartIcon
              solid={graphType === 'line'}
              onClick={() => setGraphType('line')}
            />
            <PieChartIcon
              solid={graphType === 'pie'}
              onClick={() => setGraphType('pie')}
            />
          </div>
          <OptionIcon />
        </div>

        {graphType === 'line' ? (
          <div className='container'>
            <div className='chartContainer'>
              <Line className='chart1' data={linechartData} options={options} />
            </div>

            <div className='chartDetails'>
              <div className='chartDetailsRow'>
                <i style={{ backgroundColor: '#41c8e625' }}>
                  <ThisMonthIcon />
                </i>
                <div>
                  <h2>$7.200</h2>
                  <p>This month</p>
                </div>
                <pre className='green'>&#8599; 8.2%</pre>
              </div>
              <div className='chartDetailsRow'>
                <i style={{ backgroundColor: '#a885cd25' }}>
                  <LastMonthIcon />
                </i>
                <div>
                  <h2>$4.910</h2>
                  <p>Last month</p>
                </div>
                <pre></pre>
              </div>
            </div>
          </div>
        ) : (
          <div
            className='container chartPlaceholder'
            style={{ alignItems: 'center', justifyContent: 'center' }}>
            <h1
              style={{
                flexGrow: 'none',
                alignSelf: 'center',
                justifySelf: 'center',
                textAlign: 'center',
              }}>
              Some another chart
            </h1>
          </div>
        )}
      </div>
    </>
  );
});

export default LineChart;
