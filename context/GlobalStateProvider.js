// GlobalStateProvider.js
import React, { useEffect, useState } from 'react';
import GlobalStateContext from './GlobalStateContext';

const GlobalStateProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('')
  const [active, setActive] = useState(false)

  useEffect(() => {
    setShowSidebar(false)
    
  }, [active])
  
  
  const openModal = (modalType) => {
    setIsModalOpen(true);
    setModalType(modalType);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('');
  };

  
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const globalState = {
    darkMode,
    toggleDarkMode,
    showSidebar,
    setShowSidebar,
    openModal,
    closeModal,
    isModalOpen,
    modalType,
    active,
    setActive
    

  };

  return (
    <GlobalStateContext.Provider value={globalState}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
