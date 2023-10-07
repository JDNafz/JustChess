import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../Profile/Profile";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../WelcomePage/WelcomePage";
import WelcomePage from "../WelcomePage/WelcomePage";
import RegisterPage from "../RegisterPage/RegisterPage";
import Chess from "../Chess/Chess";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]); //QUESTION why does dispatch go here?

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* change the default path from localhost:3000/ to /chess */} 
          {/* LATER CHANGE THIS TO /welcome for final product if logged in go to chess */}
          <Redirect exact from="/" to="/chess" />

          <Route
            exact
            path="/chess"
          >
            <Chess />
          </Route>

          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the WelcomePage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/profile"
          >
            <Profile />
          </ProtectedRoute>

          <Route exact path="/welcome">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/profile" />
            ) : (
              // Otherwise, show the login page
              <WelcomePage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/welcome">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/profile" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
