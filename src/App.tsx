import { useEffect, useState } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import { UserProfileType } from './models/userData.interface';

function App() {
  const [userDetails, setUserDetails] = useState<UserProfileType[] | null>(null);
  function getUserDetails() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setUserDetails(json);
      })
  }
  useEffect(() => {
    getUserDetails();
  }, [])
  function renderUserDetails() {
    return userDetails?.map((userProfile) => {
      return <UserProfile userProfile={userProfile} key={userProfile.id} />
    })
  }
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="App grid grid-cols-3 justify-items-center">
        {renderUserDetails()}
      </div>
    </>
  );
}

export default App;
