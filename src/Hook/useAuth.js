import { useContext } from "react";
import { AuthContext } from "../components/context/AuthProvider/AuthProvider";

const useAuth = ()=>{
    const auth = useContext(AuthContext);
    return auth;
}
export default useAuth;