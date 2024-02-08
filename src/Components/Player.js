import { useState } from "react";

export default function Player({
  initialname,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialname);
  const [isEditing, setIsEdeting] = useState(false);
  function handleEditClick() {
    setIsEdeting((editing) => !editing); //updating based on old state/ prev state
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let editableplayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editableplayerName = (
      <input
        type="text "
        required
        value={playerName}
        onChange={handleChange}
      ></input>
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
