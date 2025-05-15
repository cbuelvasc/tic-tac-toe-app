import { useState } from "react";
import { bool, func, string } from "prop-types";

function Player({ initialName, symbol, isActive, onSelect }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleNameChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </>
  );
}

Player.propTypes = {
  initialName: string.isRequired,
  symbol: string.isRequired,
  isActive: bool.isRequired,
  onSelect: func.isRequired,
};

export default Player;
