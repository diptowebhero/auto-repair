import React, { createContext } from "react";
import useFirebase from "../../../Hook/useFirebase";
import useServices from "../../../Hook/useServices";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const { services } = useServices();
  const AllContext = useFirebase();
  const data = { services, AllContext };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
