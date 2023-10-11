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
import Profile from "../Profile/Profile";
import WelcomePage from "../WelcomePage/WelcomePage";
import RegisterPage from "../RegisterPage/RegisterPage";
import Chess from "../Chess/Chess";

// import "./App.css";
import "../../input.css";

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

          <Route exact path="/welcome">
            <WelcomePage />
          </Route>
          <Route exact path="/chess">
            <Chess />
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
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
