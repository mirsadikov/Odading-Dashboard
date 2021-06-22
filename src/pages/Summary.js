import { useEffect, useContext } from 'react';
import { HeaderContext } from '../context/headerContext';

import TopBar from '../components/TopBar.js';
import { OptionIcon } from '../components/Icons';

export default function Main() {
  const { setActive, setToggleMenu } = useContext(HeaderContext);

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
            <OptionIcon />
          </div>
        </div>
        <div className='graph graph2'>
          <div className='graphHeader'>
            <h3>Conversations</h3>
            <OptionIcon />
          </div>
        </div>
        <div className='graph graph3'>
          <div className='graphHeader'>
            <h3>Top Categories</h3>
            <OptionIcon />
          </div>
          <div className='boxContainer'>
            <div className='box graph box1'></div>
            <div className='box graph box2'></div>
          </div>
        </div>
      </section>
    </>
  );
}
