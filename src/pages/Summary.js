import { useEffect, useContext } from 'react';
import { HeaderContext } from '../context/headerContext';

export default function Main() {
  const { setActive } = useContext(HeaderContext);

  useEffect(() => {
    setActive(1);
    // eslint-disable-next-line
  }, []);
  
  return (
    <main>
      <h1>Main</h1>
    </main>
  );
}
