// src/utils/filter.js
export function filterCharacters(gameData, filters) {
  const { roles, traits, excludedCharacters } = filters
  return gameData.characters.filter((char) => {
    const matchRole = roles.length ? roles.includes(char.role) : true
    const matchTraits = traits.length ? traits.every((t) => char.traits?.includes(t)) : true
    const notExcluded = !excludedCharacters.includes(char.name)
    return matchRole && matchTraits && notExcluded
  })
}

export function pickRandom(array) {
  if (!array || !array.length) return null
  return array[Math.floor(Math.random() * array.length)]
}

/**
 * 🔫 Génère un équipement aléatoire pour R6
 * - Striker et Sentry → deux gadgets aléatoires parmi les gadgets de leur rôle
 * - Autres agents → un gadget aléatoire + capacité fixe
 */
export function getRandomLoadout(character, allCharacters) {
  if (!character.weapons) return null

  const { primary, secondary, gadget, ability } = character.weapons

  // --- Cas spécial : Striker et Sentry (Recrues Reworkées) ---
  if (["Striker", "Sentry"].includes(character.name)) {
    // Liste de tous les gadgets possibles pour ce rôle (sans doublons)
    const gadgetsPool = [
      ...new Set(
        allCharacters.characters
          .filter(c => c.role === character.role && c.weapons?.gadget)
          .flatMap(c => c.weapons.gadget)
      )
    ]

    const gadget1 = pickRandom(gadgetsPool)
    let gadget2 = pickRandom(gadgetsPool.filter(g => g !== gadget1))

    return {
      primary: pickRandom(primary),
      secondary: pickRandom(secondary),
      gadget: [gadget1, gadget2],
      ability: null // pas de capacité spéciale
    }
  }

  // --- Cas normal ---
  return {
    primary: pickRandom(primary),
    secondary: pickRandom(secondary),
    gadget: pickRandom(gadget),
    ability: ability || null
  }
}
