import LogOutButton from "../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { useEffect, useState } from "react";

function UserPage() {
  const user = useSelector((store) => store.user);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTab, setSelectedTab] = useState("tab1"); // 'tab1' or 'tab2'
  const [bio, setBio] = useState("Bio");
  const dispatch = useDispatch();
  const savedGameList = useSelector((store) => store.savedGameList);
  const recentGamesList = useSelector((store) => store.recentGamesList);

  useEffect(() => {
    dispatch({ type: "FETCH_SAVED_GAMES" });
  }, []);

  const handleEditButtonClick = () => {
    if (isEditing) {
      dispatch({ type: "SAVE_BIO", payload: bio });
    }
    setIsEditing(!isEditing);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img
          id="avatar"
          src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/st0ckfish/phpwr6GK5.gif"
          alt="Profile"
        />
        <div>
          <h3>Welcome, {user.username}!</h3>
          <p>Your ID is: {user.id}</p>
          <textarea disabled={!isEditing} value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
          <div id="profileButtons">
            <button onClick={handleEditButtonClick}>
              {isEditing ? "Save" : "Edit"}
            </button>
            <LogOutButton className="btn" />
          </div>
        </div>
      </div>
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

        <div className="profile-content">
          {selectedTab === "tab1" ? (
            <div>
              {recentGamesList.map((game, idx) => {
                return (
                  <div key={`game_id${game.id}`} className="historyList">
                    <div> Game {idx + 1}</div>
                    <div> Move order: {game.moves} </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <ul>
              {savedGameList.map((game, idx) => {
                return (
                  <div key={`game_id${game.id}`} className="historyList">
                    <div> Game {idx + 1}</div>
                    <div> Move order: {game.moves} </div>
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
