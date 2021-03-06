import { useEffect, useContext, useState } from 'react';

import { HeaderContext } from '../context/headerContext';
import TopBar from '../components/TopBar.js';
import OptionsButton from '../components/OptionsButton';
import LineChart from '../components/LineChart';
import DoughnutChart from '../components/DoughnutChart';

export default function Main() {
  const { setActive, setToggleMenu } = useContext(HeaderContext);
  const [selection, setSelection] = useState('monthly');

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
        <div className='select-wrapper'>
          <select
            className='dropdown'
            value={selection}
            onChange={(e) => setSelection(e.target.value)}>
            <option value='monthly'>Monthly</option>
            <option value='weekly'>Weekly</option>
          </select>
        </div>
      </div>
      <section>
        <div className='row'>
          <LineChart selection={selection} />
        </div>

        <div className='row'>
          <DoughnutChart />

          <div className='graph graph3'>
            <div className='graphHeader'>
              <h3>Top Categories</h3>
              <OptionsButton />
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
        </div>
      </section>
    </>
  );
}
