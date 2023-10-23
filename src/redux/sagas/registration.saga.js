import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: "CLEAR_REGISTRATION_ERROR" });

    // passes the username and password from the payload to the server
    yield axios.post("/api/user/register", action.payload);

    // Manually log a user in after registration Then create new game
    yield put({ type: "CLEAR_LOGIN_ERROR" });
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    yield axios.post("/api/user/login", action.payload, config);
    yield put({ type: "FETCH_USER" });
    yield put({ type: "NEW_GAME" });
    //doing the initial log in here rather than the "LOGIN" call 
    //allows for users registering to establish their first "NEW GAME" 
    //and previous players to not abandon their previous game.
    
  } catch (error) {
    console.log("Error with user registration:", error);
    yield put({ type: "REGISTRATION_FAILED" });
  }
}

function* registrationSaga() {
  yield takeLatest("REGISTER", registerUser);
}

export default registrationSaga;
