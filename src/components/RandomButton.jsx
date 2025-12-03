export default function RandomButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded text-white font-semibold ${disabled ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
    >
      🎯 Tirer un personnage
    </button>
  );
}