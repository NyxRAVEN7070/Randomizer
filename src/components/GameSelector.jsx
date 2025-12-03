export default function GameSelector({ games, onChange }) {
  return (
    <div className="mb-4">
      <select
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 rounded"
        defaultValue=""
      >
        <option value="" disabled>Choisis un jeu</option>
        {games.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
    </div>
  );
}