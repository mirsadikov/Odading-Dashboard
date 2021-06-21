import { useEffect, useContext } from 'react';
import { HeaderContext } from '../context/headerContext';

export default function Statistics() {
  const { setActive } = useContext(HeaderContext);
  
  useEffect(() => {
    setActive(3);
    // eslint-disable-next-line
  }, []);
  
  return (
    <main>
      <h1>Statistics</h1>
    </main>
  );
}
