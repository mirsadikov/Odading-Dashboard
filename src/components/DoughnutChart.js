import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import OptionsButton from '../components/OptionsButton';

const data = {
  labels: ['Orders', 'Sales'],
  datasets: [
    {
      data: [68, 32],
      fill: true,
      backgroundColor: ['#AB87D1', '#41C8E6'],
      border: false,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  borderWidth: 0,
  cutout: '60%',
};

const DoughnutChart = React.memo(() => {
  return (
    <>
      <div className='graph graph2'>
        <div className='graphHeader'>
          <h3>Conversations</h3>
          <OptionsButton />
        </div>
        <div className='container'>
          <div className='chartContainer'>
            <Doughnut data={data} options={options} />
          </div>
          <div className='chartDetails'>
            <p>Sales</p>
            <p>Orders</p>
          </div>
        </div>
      </div>
    </>
  );
});

export default DoughnutChart;
