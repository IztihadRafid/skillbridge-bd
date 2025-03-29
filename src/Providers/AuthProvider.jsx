import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic()
    const googleProvider = new GoogleAuthProvider()


    //=========================================================
    //Creating User
    //=========================================================
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }


    //==========================================================
    // LOG IN / SIGNIN
    //==========================================================
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    //===========================================================
    //              LOG OUT / SIGN OUT
    //===========================================================
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    //========================================================
    //              User Change
    //========================================================
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("currentUser: ", currentUser);
            if(currentUser){
                //get token and store client
                const userInfo ={email:currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
            }
            else{
                //remove token
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        });
        return ()=>{
            return unSubscribe;
        }
    }, [axiosPublic])

    const authInfo = {
        user, loading,createUser,signIn ,logOut,googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;