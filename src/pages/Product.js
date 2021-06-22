import { useEffect, useContext } from 'react';
import { HeaderContext } from '../context/headerContext';

import TopBar from '../components/TopBar.js';

export default function Product() {
  const { setActive, setToggleMenu } = useContext(HeaderContext);

  useEffect(() => {
    setActive(4);
    setToggleMenu(false);
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <TopBar />
      <h1>Products</h1>
    </main>
  );
}
