import { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {

    //------>  usertest  
    const [usertest, setUsertest] = useState({
        name: "foysal",
        email: "mdfoysal010199@gmail.com",
        photo_url: "https://i.ibb.co.com/pwqZ8KN/handsome-indian-young-man-in-sport-wear-in-sporting-club-free-photo.jpg"
    });

    //----------------------------------------------->


    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)













    const authInfo = {
        usertest,
        setUsertest,


        user,
        setUser,
        loading,
        // signIn,
        // createUser,
        // updateUserProfile,
        // logOut,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
}

export default AuthProvider;
