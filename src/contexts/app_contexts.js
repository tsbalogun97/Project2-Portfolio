// all of our Global State management
import { createContext, useEffect, useState } from "react";

// creating our context
export const AppContext = createContext();

// creating function that provides context
const AppContextProvider = (props) => {
  
  return (
    // syntax for calling a react element
    <AppContext.Provider value={{}}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
