import React, { useState } from "react"
import data from "./data/data.json"
import { filterCharacters, pickRandom, getRandomLoadout } from "./utils/filter.js"
import Filters from "./components/Filters.jsx"
import CharacterCard from "./components/CharacterCard"
import "./styles.css"

export default function App() {
  const [selectedGame, setSelectedGame] = useState("Marvel Rivals")
  const [roles, setRoles] = useState([])
  const [traits, setTraits] = useState([])
  const [excludedCharacters, setExcludedCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [loadout, setLoadout] = useState(null)

  const gameData = data[selectedGame]

  function handleRandomize() {
    const filtered = filterCharacters(gameData, { roles, traits, excludedCharacters })
    const randomChar = pickRandom(filtered)

    if (selectedGame === "Rainbow Six Siege" && randomChar) {
      setLoadout(getRandomLoadout(randomChar, gameData))
    } else {
      setLoadout(null)
    }

    setSelectedCharacter(randomChar)
  }

  return (
    <div className="app-container">
      <h1 className="title">🎮 Randomizer</h1>

      <div className="top-section">
        <div className="controls">
          <select
            className="game-select"
            value={selectedGame}
            onChange={(e) => {
              setSelectedGame(e.target.value)
              setSelectedCharacter(null)
              setRoles([])
              setTraits([])
              setExcludedCharacters([])
            }}
          >
            {Object.keys(data).map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>

          <button className="randomize-btn" onClick={handleRandomize}>
            🎯 Tirer un personnage
          </button>
        </div>

        {selectedCharacter && (
          <div className="result">
            <CharacterCard
              character={selectedCharacter}
              game={selectedGame}
              loadout={loadout}
            />
          </div>
        )}
      </div>

      <div className="filters-section">
        <Filters
          gameData={gameData}
          roles={roles}
          setRoles={setRoles}
          traits={traits}
          setTraits={setTraits}
          excludedCharacters={excludedCharacters}
          setExcludedCharacters={setExcludedCharacters}
        />
      </div>
    </div>
  )
}
