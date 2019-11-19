import React from 'react';
import logo from './logo.svg';
import './App.css';
import GitHubLogin from 'react-github-login';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GitHubLogin clientId="ac56fad434a3a3c1561e"
          onSuccess={onSuccess}
          onFailure={onFailure}/>
      </header>
    </div>
  );
}

export default App;
