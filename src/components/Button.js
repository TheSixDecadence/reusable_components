'use client'

export default function ButtonChuy({ label, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out ${className}`}
    >
      {label}
    </button>
  )
}
