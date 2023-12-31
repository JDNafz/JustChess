import LogOutButton from "../Auth/LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { useEffect, useState } from "react";

function UserPage() {
  const user = useSelector((store) => store.user);
  const bioReducer = useSelector((store) => store.bio);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTab, setSelectedTab] = useState("tab1"); // 'tab1' or 'tab2'
  const [bio, setBio] = useState("Enter Your Bio here");
  const dispatch = useDispatch();
  const savedGameList = useSelector((store) => store.savedGameList);
  const recentGamesList = useSelector((store) => store.recentGamesList);

  useEffect(() => {
    dispatch({ type: "FETCH_SAVED_GAMES" });
    dispatch({ type: "FETCH_BIO" });
  }, []);

  const handleEditButtonClick = () => {
    if (isEditing) {
      dispatch({ type: "PUT_BIO", payload: bio });
    }
    setIsEditing(!isEditing);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const removeFromSaved = (id) => {
    dispatch({ type: "DELETE_SAVED_GAME", payload: id });
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          id="avatar"
          src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/st0ckfish/phpwr6GK5.gif"
          alt="Profile"
        />
        <div className="profileInfo">
          <h3>{user.username}</h3>
          {/* <p>Your ID is: {user.id}</p> */}
          {isEditing && (
            <textarea
              disabled={!isEditing}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          )}
          <p className="bioText">{bioReducer}</p>
          <div id="profileButtons">
            <button onClick={handleEditButtonClick}>
              {isEditing ? "Save" : "Edit Bio"}
            </button>
            <LogOutButton className="btn" />
          </div>
        </div>
      </div>
      <div className="flexyTable">
        <div className="table">
          <div className="profile-tabs">
            <button
              onClick={() => handleTabChange("tab1")}
              className={selectedTab === "tab1" ? "active" : ""}
            >
              Recent Games
            </button>
            <button
              onClick={() => handleTabChange("tab2")}
              className={selectedTab === "tab2" ? "active" : ""}
            >
              Saved Games
            </button>
          </div>
        </div>
        <div className="profile-content">
          {selectedTab === "tab1" ? (
            <div>
              {recentGamesList.map((game, idx) => {
                return (
                  <div key={`game_id${game.id}`} className="historyList">
                    <div> Game {idx + 1}</div>
                    <div>
                      Moves:{" "}
                      {game.moves.map((move) => {
                        return move + ", ";
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <ul>
              {savedGameList.map((game, idx) => {
                return (
                  <div key={`game_id${game.id}`} className="historyList">
                    <h3> Game {idx + 1}</h3>
                    <div>
                      {" "}
                      Moves:{" "}
                      {game.moves.map((move) => {
                        return move + ", ";
                      })}{" "}
                    </div>
                    <button onClick={() => removeFromSaved(game.id)}>
                      Removed From Saved
                    </button>
                  </div>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
