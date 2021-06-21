import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { HeaderContext } from '../context/headerContext';
import {
  SummaryIcon,
  TransactionsIcon,
  StatisticsIcon,
  ProductIcon,
  CategoryIcon,
} from './Icons';

export default function Sidebar() {
  const { active } = useContext(HeaderContext);

  return (
    <nav className='sidebar'>
      <header>
        <img src='/images/logo.svg' className='logo' alt='logo' />
        <h1 className='brand'>Odading Dash</h1>
      </header>
      <ul>
        <li className={active === 1 && 'active'}>
          <Link to='/'>
            <div className='iconContainer'>
              <SummaryIcon />
            </div>
            <h2>Summary</h2>
          </Link>
        </li>
        <li className={active === 2 && 'active'}>
          <Link to='/transaction'>
            <div className='iconContainer'>
              <TransactionsIcon />
            </div>
            <h2>Transaction</h2>
          </Link>
        </li>
        <li className={active === 3 && 'active'}>
          <Link to='/statistics'>
            <div className='iconContainer'>
              <StatisticsIcon />
            </div>
            <h2>Statistics</h2>
          </Link>
        </li>
        <li className={active === 4 && 'active'}>
          <Link to='/product'>
            <div className='iconContainer'>
              <ProductIcon />
            </div>
            <h2>Product</h2>
          </Link>
        </li>
        <li className={active === 5 && 'active'}>
          <Link to='/category'>
            <div className='iconContainer'>
              <CategoryIcon />
            </div>
            <h2>Category</h2>
          </Link>
        </li>
      </ul>
      <div className='download'>
        <div className='container'>
          <p>Try desktop app version</p>
          <button>Download</button>
        </div>
      </div>
    </nav>
  );
}
