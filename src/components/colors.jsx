import { useState } from "react";

function Colors() {
  const colors = [
    {
      id: "blue",
      name: "Titânio Azul",
      image: `${import.meta.env.BASE_URL}img/iphone-blue.jpg`,
      colorClass: "bg-blue-500",
    },
    {
      id: "silver",
      name: "Titânio Natural",
      image: `${import.meta.env.BASE_URL}img/iphone-silver.jpg`,
      colorClass: "bg-gray-300",
    },
    {
      id: "orange",
      name: "Titânio Laranja",
      image: `${import.meta.env.BASE_URL}img/iphone-orange.jpg`,
      colorClass: "bg-orange-500",
    },
  ];

  const models = [
    {
      name: "Pro Max",
      screen: "6.9 polegadas",
      storage: "256GB, 512GB ou 1TB",
      battery: "33h de vídeo",
      weight: "221g",
    },
    {
      name: "Pro",
      screen: "6.3 polegadas",
      storage: "128GB, 256GB ou 512GB",
      battery: "29h de vídeo",
      weight: "199g",
    },
  ];

  const [selectedColor, setSelectedColor] = useState("blue");

  const selectedPhone = colors.find(
    (color) => color.id === selectedColor
  );

  return (
    <section id="cores" className="bg-black py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Escolha Sua Cor
          </h2>

          <p className="text-xl text-gray-400">
            Três lindos acabamentos em titânio
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-3xl">

            <div className="relative flex items-center justify-center min-h-[500px]">
              <img
                src={selectedPhone.image}
                alt={`iPhone 17 Pro ${selectedPhone.name}`}
                className="max-w-full max-h-[600px] object-contain mx-auto transition-all duration-500"
              />
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
              <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/60 inline-block">
                <h3 className="text-2xl font-semibold">
                  {selectedPhone.name}
                </h3>
              </div>
            </div>

          </div>
        </div>

        <div className="flex justify-center items-center gap-5 mb-16">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              aria-label={`Selecionar ${color.name}`}
              className="relative cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <div
                className={`w-16 h-16 rounded-full border-4 ${
                  color.colorClass
                } ${
                  selectedColor === color.id
                    ? "border-white scale-110"
                    : "border-gray-600"
                }`}
              ></div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-800 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">📱</div>

              <h3 className="text-2xl font-bold mb-3">
                iPhone 17  {model.name}
              </h3>

              <p className="text-gray-400 mb-4">
                Tela de {model.screen}
              </p>

              <ul className="space-y-2 text-gray-300">
                <li> {model.storage}</li>
                <li> {model.battery}</li>
                <li> {model.weight}</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-700 hover:bg-blue-800 cursor-pointer text-white px-8 py-5 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 mb-8 shadow-md shadow-blue-500/50">
            Compre Agora a partir de R$ 9.950,00
          </button>

          <p className="text-gray-400">
            Ou em até 12x de R$ 829,17 sem juros
          </p>
        </div>

      </div>
    </section>
  );
}

export default Colors;