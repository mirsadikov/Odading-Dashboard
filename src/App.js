import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Sidebar from './components/Sidebar.js';
import Summary from './pages/Summary.js';
import Transaction from './pages/Transaction';
import Statistics from './pages/Statistics.js';
import Product from './pages/Product.js';
import Category from './pages/Category.js';
import Profile from './components/Profile.js';

import { HeaderProvider } from './context/headerContext';

function App() {
  return (
    <HeaderProvider>
      <Router>
        <div className='App'>
          <Sidebar />
          <main>
            <Route exact path='/' component={Summary} />
            <Route exact path='/transaction' component={Transaction} />
            <Route exact path='/statistics' component={Statistics} />
            <Route exact path='/product' component={Product} />
            <Route exact path='/category' component={Category} />
          </main>
          <Profile />
        </div>
        <div className='author'>Made by Abror</div>
      </Router>
    </HeaderProvider>
  );
}

export default App;
