import { createContext, useState } from 'react';

const HeaderContext = createContext();

function HeaderProvider(props) {
  const [active, setActive] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <HeaderContext.Provider
      value={{ active, setActive, toggleMenu, setToggleMenu }}
      {...props}
    />
  );
}

export { HeaderContext, HeaderProvider };
