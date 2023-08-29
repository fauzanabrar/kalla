import React, { createContext, useContext, useState } from 'react';

// Define the Context
interface SidebarContextType {
  activeSubmenuDashboard: string;
  activeSubmenuBarangJasa: string;
  setActiveSubmenuDashboard: React.Dispatch<React.SetStateAction<string>>;
  setActiveSubmenuBarangJasa: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Create the Context Provider
const SidebarContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [activeSubmenuDashboard, setActiveSubmenuDashboard] = useState('');
  const [activeSubmenuBarangJasa, setActiveSubmenuBarangJasa] = useState('');

  return (
    <SidebarContext.Provider
      value={{
        activeSubmenuDashboard,
        activeSubmenuBarangJasa,
        setActiveSubmenuDashboard,
        setActiveSubmenuBarangJasa,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export {SidebarContext, SidebarContextProvider};
