
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import initialAuthnitcation from '../Firebase.init';


// initialize firebase app
initialAuthnitcation();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (loginData, history) => {
        console.log(loginData);
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, loginData.email, loginData.password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email:loginData.email, displayName: loginData.name };
                setUser(newUser);


                //save user to database
                saveUser(loginData,'POST')
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: loginData.name
                }).then(() => {
                }).catch((error) => {
                });
                history('/Deshbords/Profile');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const destination = location?.state?.from || '/Deshbords';
                history('/Deshbords');
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (history,location ) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
            //   const user = result.user;
            //   saveUser(user.email, user.displayName,'PUT')
            //   const destination = location?.state?.from || '/';
                history('/Deshbords');
               
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    
    useEffect(() => {
        fetch(`https://mysterious-fjord-19391.herokuapp.com/admin/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])




    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
const saveUser=(loginData,method)=>{
const user=loginData;
console.log(user);
fetch('https://mysterious-fjord-19391.herokuapp.com/users',{
  method:method,
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(user)
})
.then()
}
    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;