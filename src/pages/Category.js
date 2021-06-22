import { useEffect, useContext } from 'react';
import { HeaderContext } from '../context/headerContext';

import TopBar from '../components/TopBar.js';

export default function Category() {
  const { setActive, setToggleMenu } = useContext(HeaderContext);

  useEffect(() => {
    setActive(5);
    setToggleMenu(false);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <TopBar />
      <div className='center'>
        <h1>Category</h1>
      </div>
    </>
  );
}
