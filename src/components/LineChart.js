import { useState } from 'react';

import { LinearChartIcon, OptionIcon, PieChartIcon } from '../components/Icons';

// import { Line } from 'react-chartjs-2';

// const linechartData = {
//   labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//   datasets: [
//     {
//       label: '1',
//       data: [3500, 5500, 5300, 3400, 4700, 3000, 5600],
//       fill: false,
//       borderColor: '#8EEAFF',
//       tension: 0.1,
//     },
//     {
//       label: '2',

//       data: [2000, 1500, 3000, 2500, 4800, 2000, 4800],
//       fill: false,
//       borderColor: '#A684CB',
//       tension: 0.1,
//     },
//   ],
// };

// const options = {
//   plugins: {
//     legend: {
//       display: false,
//     },
//   },
//   responsive: true,
//   scales: {
//     y: {
//       display: true,
//       suggestedMin: 1500,
//       suggestedMax: 7000,
//     },
//   },
// };

export default function LineChart() {
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
        {/* <div className='chartContainer' style={{ display: 'flex' }}>
        <Line
          className='chart1'
          data={linechartData}
          options={options}
          width={60}
          height={13}
        />
        <div className='chartDetails'>
          
  </div>*/}
      </div>
    </>
  );
}
