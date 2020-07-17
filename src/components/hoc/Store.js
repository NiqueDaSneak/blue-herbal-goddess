import React, {createContext} from "react";
import reducer from '../../store/reducer'
import initialState from '../../store/initialState'
import useThunkReducer from "react-hook-thunk-reducer";

export const GlobalStore = ({children}) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  )
}

export const GlobalContext = createContext(initialState);

