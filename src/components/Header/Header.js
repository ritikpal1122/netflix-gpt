import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, setUser } from '../../utils/userSlice';
import { LOGO } from '../../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const dispatch  = useDispatch()
  const user = useSelector((store) => store.user)
  console.log(user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser())
      navigate('/')
    }).catch((error) => {
      navigate("/error")
      // An error happened.
    });
  }
  useEffect(() => {
  const unsubscribe =   onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        // here will update the store
        dispatch(
          setUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL:photoURL,
          })
        );
      navigate("/browse")  // when user logged in navigate to browse Page

      } else {
        // User is signed out
        dispatch(removeUser);
        navigate("/")
      }
    });
    // unsubscribe function 
    return () => unsubscribe();
  }, []);
  return (
    <div className='absolute px-8 w-screen bg-gradient-to-b from-black z-50 flex items-center justify-between'> 
      <img className='w-44' src={LOGO} alt='logo' />
    {user ? (
    <div className='flex items-center mr-2'>
      <img className='w-12 h-12 rounded-full' alt='icon' src={user.photoURL} />
      <button onClick={handleSignOut} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 ms-3 rounded-lg px-3'>
        Sign Out
      </button>
    </div>
  ) : (
    null
  )}
    </div>
    
  );
}

export default Header;
