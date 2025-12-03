import React from "react"

export default function CharacterCard({ character, game, loadout }) {
  return (
    <div className="character-card">
      {/*  Image du personnage */}
      <img
        src={`/images/${character.name}.png`}
        onError={(e) => (e.target.src = "/images/default.png")}
        alt={character.name}
        className="character-image"
      />

      {/*  Infos générales */}
      <h2><strong>{character.name}</strong></h2>
      {character.full_name && <p><strong>Full name :</strong> {character.full_name}</p>}
      {character.organization && <p><strong>Organization :</strong> {character.organization}</p>}
      {character.squad && <p><strong>Squad :</strong> {character.squad}</p>}
      <p><strong>Role :</strong> {character.role}</p>

      {/*  Rainbow Six Siege : loadout aléatoire */}
      {game === "Rainbow Six Siege" && loadout && (
        <div className="loadout">
          <p><strong>Primary weapon :</strong> {loadout.primary}</p>
          <p><strong>Secondary weapon :</strong> {loadout.secondary}</p>

          {Array.isArray(loadout.gadget) ? (
            <p><strong>Gadget :</strong> {loadout.gadget.join(", ")}</p>
          ) : (
            <p><strong>Gadget :</strong> {loadout.gadget}</p>
          )}

          <p><strong>Ability :</strong> {loadout.ability || "—"}</p>
        </div>
      )}

      {/*  Marvel Rivals ou traits communs */}
      <p><strong>Traits :</strong> {character.traits?.join(", ")}</p>
    </div>
  )
}
