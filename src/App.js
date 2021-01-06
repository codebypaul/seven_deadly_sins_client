// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Navbar from './components/Navbar';
// Pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Docs from './pages/Docs'
import Details from './pages/Details'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem('jwtToken');
  return <Route {...rest } render={(props) => {
    return user ? <Component { ...rest } { ...props }/> : <Redirect to="/login" />
  }}/>
}

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  // const [] = useState()

  useEffect(() => {
    let token;
    // if there is no token in localStorage, then the user is in authenticated
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log('nowCurentUser is here...');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <div className="">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />

        <Switch>
          <Route path='/signup' component={ Signup } />
          <Route 
            path='/login' 
            render={ (props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>} />
          <PrivateRoute path="/profile" component={ Profile } user={currentUser}/>
          {/* <Route exact path="/" render={()=>{<Home sins={}/>}}/> */}
          <Route exact path='/' component={Home}/>
          <Route path="/docs" component={ Docs }/>
          <Route path="/details:name" component={ Details }/>
        </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
