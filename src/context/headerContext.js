import { createContext, useState } from 'react';

const HeaderContext = createContext();

function HeaderProvider(props) {
  const [active, setActive] = useState();

  return <HeaderContext.Provider value={{ active, setActive }} {...props} />;
}

export { HeaderContext, HeaderProvider };
