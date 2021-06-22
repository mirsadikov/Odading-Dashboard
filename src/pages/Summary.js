import { useEffect, useContext, useState } from 'react';

import { HeaderContext } from '../context/headerContext';
import TopBar from '../components/TopBar.js';
import { LinearChartIcon, OptionIcon, PieChartIcon } from '../components/Icons';
import LineChart from '../components/LineChart';

export default function Main() {
  const { setActive, setToggleMenu } = useContext(HeaderContext);
  const [graphType, setGraphType] = useState('line');

  useEffect(() => {
    setActive(1);
    setToggleMenu(false);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <TopBar />
      <div className='sectionHeader'>
        <h2>My Performance</h2>
        <div className='dropdown'>Dropdown</div>
      </div>
      <section>
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
          <LineChart />
        </div>
        <div className='graph graph2'>
          <div className='graphHeader'>
            <h3>Conversations</h3>
            <OptionIcon />
          </div>

          {/* Chart 2 */}
        </div>
        <div className='graph graph3'>
          <div className='graphHeader'>
            <h3>Top Categories</h3>
            <OptionIcon />
          </div>
          <div className='boxContainer'>
            <div className='box graph box1'>
              <img
                src='/images/category-footwear.png'
                alt=''
                className='categoryImg'
              />
              <div className='categoryDetails'>
                <h4>Footwear</h4>
                <p>Persapatuan duniawi...</p>
              </div>
              <div className='categoryPrice'>
                <h3>$2.440</h3>
              </div>
            </div>
            <div className='box graph box2'>
              <img
                src='/images/category-accessories.png'
                alt=''
                className='categoryImg'
              />
              <div className='categoryDetails'>
                <h4>Accessories</h4>
                <p>Kacamata, Kalung...</p>
              </div>
              <div className='categoryPrice'>
                <h3>$1.800</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
