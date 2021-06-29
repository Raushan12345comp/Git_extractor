import React, {useState, useEffect, useContext} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";

// Toast
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
// firebase
import firebase from "firebase/app"
import "firebase/auth"

// components


import Signin from "./Pages/Authenticate/SignIn/Signin";
import Signup from "./Pages/Authenticate/SignUp/Signup";
import PageNotFound from "./Pages/Extra/PageNotFound/PageNotFound";
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import firebaseConfig from "./Config/firebaseConfig";
import Home from "./Pages/Dahboard/Home/Home";
import ForgotPassowrd from "./Pages/Authenticate/PasswordReset/ForgotPassword";
import About from "./Pages/Extra/About/About";
import UserByLocation from './Pages/Dahboard/Home/UserByLocation/UserByLocation'

// init firebase
firebase.initializeApp(firebaseConfig)


const App = () => {

  const [user, setUser] = useState(null)

  const context = useContext(UserContext)



  

  const authListner = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {

        setUser(user)

      } else {
        setUser(null)
      }
    })
  }


  useEffect(() => {
    authListner()
  }, [])






  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        <Switch>
          <Route exact path="/" component= {Home} />
          <Route exact path="/signin" component= {Signin} />
          <Route exact path="/signup" component= {Signup} />
          <Route exact path="/forgot-password" component= {ForgotPassowrd} />
          <Route exact path="/about" component= {About} />
          <Route exact path="/userbylocation" component= {UserByLocation} />
          <Route exact path="*" component= {PageNotFound} />
        </Switch>
        {/* <Footer /> */}
      </UserContext.Provider>
    </Router>
  );
}

export default App;
