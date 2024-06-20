import { Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import logo from '../assets/log.png';
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();



  const handleLogin = (event) => {
    event.preventDefault();
    if (username === 'tsiegmund@harvestsports.com' && password === 'RobinOrange1205#') {
      setIsLoggedIn(true);
      setErrorMessage('');
      Cookies.set("targetToken", "shdgs67888sdhhsd", { expires: 7 });
      navigate('/Dashboard');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const styles = {
    logo:{
        margin:'auto',
        padding: '10px',
    },
    img: {
        height: '100px',
        width: '100px',
    },

    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: 'Black',
      
    },
    card: {
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.9)',
      textAlign: 'center',
      width: '60%',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#B31C1C',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    errorMessage: {
      color: 'red',
      marginTop: '10px',
    },
    welcomeMessage: {
      color: '#28a745',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      


      <div style={styles.card}>
      <img src={logo} style={styles.logo}></img>
        <Text fontSize={"1.2rem"} fontWeight={"bold"}>Sign into your Target account </Text>
        <br />

        {!isLoggedIn ? (
          <form onSubmit={handleLogin}>
            
            <div>
              <label>
                
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  style={styles.input}
                  placeholder='Email address '
                />
              </label>
            </div>
            <div>
              <label>
                
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={styles.input}
                  placeholder='Password'
                />
              </label>
            </div>
            {errorMessage && (
              <div style={styles.errorMessage}>{errorMessage}</div>
            )}
            <div>
              <button type="submit" style={styles.button}>Login</button>
            </div>
          </form>
        ) : (
          <div>
            <h3 style={styles.welcomeMessage}>Welcome, ak12!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
