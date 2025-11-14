import React, { createContext, useState } from "react";

interface ContextProps {
  toggle: Boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuToggleContext = createContext<ContextProps | null>(null);

const MenuToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <MenuToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </MenuToggleContext.Provider>
  );
};

export default MenuToggleProvider;
