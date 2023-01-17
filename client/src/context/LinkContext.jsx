import React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

export const LinkContext = React.createContext();

const LinkContextProvider = ({ children }) => {
  return <LinkContext.Provider value={{}}>{children}</LinkContext.Provider>;
};

export default LinkContextProvider;
