import { useMemo } from "react";

export default function FilterPanel({ game, characters, onChange }) {
  const roles = useMemo(() => [...new Set(characters.map(c => c.role).filter(Boolean))], [characters]);
  const difficulties = useMemo(() => [...new Set(characters.map(c => c.difficulty).filter(Boolean))], [characters]);
  const traits = useMemo(() => [...new Set(characters.flatMap(c => c.traits || []))], [characters]);

  const handleFilterChange = (key, value) => {
    onChange(prev => ({ ...prev, [key]: value }));
  };

  const handleTraits = (trait) => {
    onChange(prev => {
      const list = new Set(prev.traits || []);
      list.has(trait) ? list.delete(trait) : list.add(trait);
      return { ...prev, traits: Array.from(list) };
    });
  };

  return (
    <div className="grid gap-3 justify-center mb-4">
      {roles.length > 0 && (
        <select onChange={(e) => handleFilterChange("role", e.target.value)} className="border p-2 rounded">
          <option value="">Tous les rôles</option>
          {roles.map(r => <option key={r}>{r}</option>)}
        </select>
      )}
      {difficulties.length > 0 && (
        <select onChange={(e) => handleFilterChange("difficulty", e.target.value)} className="border p-2 rounded">
          <option value="">Toutes difficultés</option>
          {difficulties.map(d => <option key={d}>{d}</option>)}
        </select>
      )}
      <div className="flex flex-wrap justify-center gap-2">
        {traits.map(t => (
          <button
            key={t}
            onClick={() => handleTraits(t)}
            className="border px-3 py-1 rounded hover:bg-blue-100 transition"
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}