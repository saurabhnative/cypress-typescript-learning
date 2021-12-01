import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
interface UserDetails {
  title: string;
  body: string;
  userId: number;
}
function App() {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  function getUserDetails() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setUserDetails(json);
      });
  }
  useEffect(() => {
    getUserDetails();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p id={"detailsTitle"}>{userDetails && userDetails.title}</p>
      </header>
    </div>
  );
}

export default App;
