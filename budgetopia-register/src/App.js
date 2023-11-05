import { useState } from 'react';
import logo from './logo.PNG';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currForm, setCurrForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrForm(formName);
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {
        currForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
