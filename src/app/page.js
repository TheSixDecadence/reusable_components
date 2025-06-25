'use client'

import ButtonChuy from "@/components/Button"

export default function Home() {
  const handleClick = (msg) => {
    alert(`${msg}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="p-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Reusable Components
          </h1>
          <p className="text-xl text-gray-600">
            Botones por qué no se me ocurrio otra cosa y una navbar es muy generico xD
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Botón 1
            </h3>
            <div className="flex justify-center">
              <ButtonChuy 
                label="Click me" 
                onClick={() => handleClick("Primer botón, yey")} 
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Botón dos
            </h3>
            <div className="flex justify-center">
              <ButtonChuy 
                label="ola 2" 
                onClick={() => handleClick("La vdd aqui no quise poner botón dos, entonces puse ola 2")} 
                className="bg-gray-500 hover:bg-gray-600"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Botón de PELIGROOOOO
            </h3>
            <div className="flex justify-center">
              <ButtonChuy 
                label="Eliminar" 
                onClick={() => handleClick("SIGNIFICA PELIGROOOOOOOOO don ramon meme google buscar.jpg")} 
                className="bg-red-600 hover:bg-red-700"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Botón tan especial como Dani
            </h3>
            <div className="flex justify-center">
              <ButtonChuy
                label="¡Especial!"
                onClick={() => handleClick("Oda")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}