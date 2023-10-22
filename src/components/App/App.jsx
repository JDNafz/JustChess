import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Page/Nav";
import Footer from "../Page/Footer";

import ProtectedRoute from "../Auth/ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import Profile from "../Profile/Profile";
import WelcomePage from "../WelcomePage/WelcomePage";
import RegisterPage from "../Auth/RegisterPage/RegisterPage";
import MissingRoute from "../MissingRoute/MissingRoute";
import PlayArea from "../ChessComponents/PlayArea/PlayArea"

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]); //QUESTION why does dispatch go here?

  return (
    <Router>
      <Nav />
      <Switch>
        {/* change the default path from localhost:3000/ to /chess */}
        {/* LATER CHANGE THIS TO /welcome for final product if logged in go to chess */}
        <Redirect exact from="/" to="/welcome" />

        <Route exact path="/welcome">
          <WelcomePage />
        </Route>
        <Route exact path="/chess">
          <PlayArea />
        </Route>

        <Route exact path="/about">
          <AboutPage />
        </Route>

        {/* Only logged in users may see protected routes */}
        <ProtectedRoute exact path="/profile">
          <Profile />
        </ProtectedRoute>

        <Route exact path="/register">
          {user.id ? (
            // If the user is already logged in,
            // redirect them to the /profile page
            <Redirect to="/profile" />
          ) : (
            // Otherwise, show the registration page
            <RegisterPage />
          )}
        </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <MissingRoute />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
