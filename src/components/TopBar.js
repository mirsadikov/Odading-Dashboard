import { useContext } from 'react';
import { HeaderContext } from '../context/headerContext';

import { BellIcon, SearchIcon, HamburgerIcon } from './Icons';

export default function TopBar() {
  const { setToggleMenu, toggleMenu } = useContext(HeaderContext);
  return (
    <header>
      <div>
        <button className='menuBtn' onClick={() => setToggleMenu(!toggleMenu)}>
          <HamburgerIcon />
        </button>
        <div className='search'>
          <SearchIcon />
          <input type='text' placeholder='Search the items here' />
        </div>
      </div>
      <button className='bell'>
        <BellIcon />
      </button>
    </header>
  );
}
