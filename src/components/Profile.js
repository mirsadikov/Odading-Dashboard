import { ProductIcon } from './Icons';

export default function Profile() {
  return (
    <div className='profile'>
      <div className='profileHeader'>
        <h1>Shop Profile</h1>
        <button className='optionButton'>
          <img src='/images/buttons/options.png' alt='' />
        </button>
      </div>

      <div className='profileStore'>
        <div className='container'>
          <img src='/images/store.png' alt='' />
          <div className='badge'>
            <img src='/images/badge.png' alt='' />
          </div>
        </div>

        <div className='storeTitle'>
          <h3>Toko mang oleh</h3>
          <p>Ikan hiu makan tomat </p>
        </div>

        <div className='storeRates'>
          <div className='ratesContaier'>
            <i>
              <ProductIcon />
            </i>
            <div>
              <h2>4.8 M</h2>
              <pre>Followers</pre>
            </div>
          </div>
          <div className='vector'></div>
          <div className='ratesContaier'>
            <i>
              <ProductIcon />
            </i>
            <div>
              <h2>142</h2>
              <pre>Products</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
