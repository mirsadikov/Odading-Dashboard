import { useEffect, useContext } from 'react';
import { HeaderContext } from '../context/headerContext';

export default function Product() {
  const { setActive } = useContext(HeaderContext);

  useEffect(() => {
    setActive(4);
    // eslint-disable-next-line
  }, []);
  
  return (
    <main>
      <h1>Products</h1>
    </main>
  )
}
