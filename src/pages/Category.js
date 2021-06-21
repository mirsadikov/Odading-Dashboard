import { useEffect, useContext } from 'react';
import { HeaderContext } from '../context/headerContext';

export default function Category() {
  const { setActive } = useContext(HeaderContext);

  useEffect(() => {
    setActive(5);
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <h1>Category</h1>
    </main>
  );
}
