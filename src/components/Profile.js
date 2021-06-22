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
      </div>

      <div className='storeTitle'>
        <h3>Toko mang oleh</h3>
        <p>Ikan hiu makan tomat </p>
      </div>
    </div>
  );
}
