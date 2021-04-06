import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Book from './Book/Book';
import Login from './Auth/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import PrivetRoute from './PrivetRoute/PrivetRoute';

export const userContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Nav></Nav>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route  path='/home'>
          <Home></Home>
        </Route>
        <PrivetRoute path='/booking/:id'>
           <Book></Book>
        </PrivetRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
