import { useEffect, useContext } from 'react';
import { HeaderContext } from '../context/headerContext';

import TopBar from '../components/TopBar.js';

export default function Statistics() {
  const { setActive, setToggleMenu } = useContext(HeaderContext);
  
  useEffect(() => {
    setActive(3);
    setToggleMenu(false)
    // eslint-disable-next-line
  }, []);
  
  return (
    <main>
      <TopBar />
      <h1>Statistics</h1>
    </main>
  );
}
