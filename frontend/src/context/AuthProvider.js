import { AuthContext } from "./AuthContext";
import { useContext,useState } from "react";
// import { useCookies } from "react-cookie";
// import axios from "axios";
const AuthProvider = ({children}) => {
    // const [cookies,removeCookie] = useCookies(["jwtToken"]);
    const [user,setUser] = useState(null);

   {/* useEffect(() =>{
        const verifyUser = async () =>{
            try{
                const {data} = await axios.get("http://localhost:3002/users/verify",{withCredentials:true});
                if(data.status){
                    setUser(data.user);
                }else{
                    setUser(null);
                }
            }
            catch(err){
                setUser(null);
            }
        }
        verifyUser();
    },[cookies.jwtToken])*/}  // used fro not httponly cookie handling

    return <AuthContext.Provider value ={{user,setUser}}>{children}</AuthContext.Provider>;
}

export const useUser = () => useContext(AuthContext);

export default AuthProvider;