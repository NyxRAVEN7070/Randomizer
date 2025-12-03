import React from "react";

export default function Filters({
  gameData,
  roles,
  setRoles,
  traits,
  setTraits,
  excludedCharacters,
  setExcludedCharacters,
}) {
  if (!gameData) return null;

  // 🔘 Toggle pour les cases à cocher
  function toggle(setter, value) {
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  }

  return (
    <div className="filters-section">
      {/* 🧩 Rôles */}
      <div className="filter-group">
        <h3>Rôles</h3>
        {gameData.roles?.map((role) => (
          <label key={role}>
            <input
              type="checkbox"
              checked={roles.includes(role)}
              onChange={() => toggle(setRoles, role)}
            />
            {role}
          </label>
        ))}
      </div>

      {/* 🧩 Traits */}
      <div className="filter-group">
        <h3>Traits</h3>
        {Array.from(
          new Set(
            gameData.characters?.flatMap((c) => c.traits || [])
          )
        ).map((trait) => (
          <label key={trait}>
            <input
              type="checkbox"
              checked={traits.includes(trait)}
              onChange={() => toggle(setTraits, trait)}
            />
            {trait}
          </label>
        ))}
      </div>

      {/* 🧩 Exclure un personnage */}
      <div className="filter-group">
        <h3>Exclure un personnage</h3>
        {gameData.characters?.map((char) => (
          <label key={char.name}>
            <input
              type="checkbox"
              checked={excludedCharacters.includes(char.name)}
              onChange={() => toggle(setExcludedCharacters, char.name)}
            />
            {char.name}
          </label>
        ))}
      </div>
    </div>
  );
}
