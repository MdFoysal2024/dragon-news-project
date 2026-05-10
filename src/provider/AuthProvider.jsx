import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {

    //------>  usertest  
    const [usertest, setUsertest] = useState({
        name: "foysal",
        email: "mdfoysal010199@gmail.com",
        photo_url: "https://i.ibb.co.com/pwqZ8KN/handsome-indian-young-man-in-sport-wear-in-sporting-club-free-photo.jpg"
    });

    //----------------------------------------------->



    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    console.log(loading, user)
    console.log(user?.email)




    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const  signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      
    }



    const logOut = () => {
        setLoading(true);
       return signOut(auth);
    }








    const authInfo = {
        usertest,
        setUsertest,


        user,
        setUser,
        loading,
        signIn,
        createNewUser,
        // updateUserProfile,
         logOut,

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });

        return () => {
            unsubscribe();
        }
    }, [])










    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
}

export default AuthProvider;
