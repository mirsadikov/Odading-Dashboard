import { useEffect, useContext } from 'react';
import { HeaderContext } from '../context/headerContext';

export default function Transaction() {
  const { setActive } = useContext(HeaderContext);

  useEffect(() => {
    setActive(2);
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <h1>Transaction</h1>
    </main>
  );
}
