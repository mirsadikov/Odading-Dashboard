import { useContext } from 'react';
import { HeaderContext } from '../context/headerContext';

export default function TopBar() {
  const { setToggleMenu, toggleMenu } = useContext(HeaderContext);
  return (
    <header>
      <button className='menuBtn' onClick={() => setToggleMenu(!toggleMenu)}>
        M
      </button>
    </header>
  );
}
