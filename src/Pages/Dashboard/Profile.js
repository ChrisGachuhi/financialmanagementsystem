import React from 'react'
import NavbarDashboard from '../../components/NavbarDashboard'
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Profile() {

  const auth = getAuth();
  const [userEmail, setUserEmail] = useState();

  onAuthStateChanged(auth, (user) => {

  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    const displayName = user.displayName;
    const email = user.email;
    setUserEmail(email);

    console.log(uid);
    console.log(displayName);
    console.log(email);
    // ...
  } else {
    // User is signed out
    // ...
  }
  });
  
  return (
    <div className='profile'>
      <NavbarDashboard />
      <div className='viewplane'>
        <h1>Account Details</h1>
        <div className="tiles">
          {/* <div className="accountBalance"></div>
          <div className="accountTrend"></div>
          <div className="accountTransaction"></div> */}
          <h1>{userEmail}</h1>
          <button>SignOut</button>

        </div>
      </div>
    </div>
  )
}

export default Profile