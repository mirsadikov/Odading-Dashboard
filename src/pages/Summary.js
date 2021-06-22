import { useEffect, useContext } from 'react';
import { HeaderContext } from '../context/headerContext';

import TopBar from '../components/TopBar.js';

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
      <div className='center'>
        <h1>Main</h1>
      </div>
    </>
  );
}
