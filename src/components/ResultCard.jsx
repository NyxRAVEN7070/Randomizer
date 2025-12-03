export default function ResultCard({ perso }) {
  return (
    <div className="mt-6 bg-white shadow-lg rounded-2xl p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">{perso.name}</h2>
      {perso.role && <p><strong>Rôle :</strong> {perso.role}</p>}
      {perso.difficulty && <p><strong>Difficulté :</strong> {perso.difficulty}</p>}
      {perso.traits?.length > 0 && (
        <p><strong>Traits :</strong> {perso.traits.join(', ')}</p>
      )}
    </div>
  );
}