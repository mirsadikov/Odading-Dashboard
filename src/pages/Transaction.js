import { useEffect, useContext } from 'react';
import { HeaderContext } from '../context/headerContext';

import TopBar from '../components/TopBar.js';

export default function Transaction() {
  const { setActive, setToggleMenu } = useContext(HeaderContext);

  useEffect(() => {
    setActive(2);
    setToggleMenu(false);
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <TopBar />
      <h1>Transaction</h1>
    </main>
  );
}
