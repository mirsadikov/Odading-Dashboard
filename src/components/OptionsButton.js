import { useState } from 'react';

import { OptionIcon } from './Icons';
export default function OptionsButton() {
  const [showOption, setShowOption] = useState(false);
  const clickHandler = () => {
    setShowOption((showOption) => !showOption);
  };

  return (
    <div onClick={clickHandler} style={{ position: 'relative' }}>
      <OptionIcon />
      <div className={`optionsTable ${showOption ? 'optionsVisible' : ''}`}>
        <p>Settings</p>
        <p>Profile</p>
        <p>Dark Mode</p>
      </div>
    </div>
  );
}
