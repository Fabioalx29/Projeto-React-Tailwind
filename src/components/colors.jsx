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
    <section
      id="cores"
      className="bg-black px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold sm:text-5xl lg:text-6xl">
            Escolha Sua Cor
          </h2>

          <p className="text-base text-gray-400 sm:text-xl">
            Três lindos acabamentos em titânio
          </p>
        </div>

        <div className="mb-10 flex justify-center sm:mb-12">
          <div className="relative w-full max-w-3xl">
            <div className="flex min-h-[300px] items-center justify-center sm:min-h-[450px] lg:min-h-[500px]">
              <img
                src={selectedPhone.image}
                alt={`iPhone 17 Pro ${selectedPhone.name}`}
                className="h-auto max-h-[400px] w-full max-w-[280px] object-contain transition-all duration-500 sm:max-h-[550px] sm:max-w-[400px] lg:max-h-[600px] lg:max-w-[500px]"
              />
            </div>

            <div className="absolute bottom-3 left-0 right-0 text-center sm:bottom-8">
              <div className="inline-block rounded-full bg-black/60 px-5 py-3 backdrop-blur-md sm:px-8 sm:py-4">
                <h3 className="text-lg font-semibold sm:text-2xl">
                  {selectedPhone.name}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-14 flex items-center justify-center gap-4 sm:mb-16 sm:gap-5">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              aria-label={`Selecionar ${color.name}`}
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <div
                className={`h-12 w-12 rounded-full border-4 transition-all duration-300 sm:h-16 sm:w-16 ${
                  color.colorClass
                } ${
                  selectedColor === color.id
                    ? "scale-110 border-white"
                    : "border-gray-600"
                }`}
              ></div>
            </button>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-20 sm:gap-8 md:grid-cols-2">
          {models.map((model, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900 to-transparent p-5 transition-all duration-300 hover:border-gray-600 sm:p-8 md:hover:scale-105"
            >
              <div className="mb-4 text-3xl sm:text-4xl">📱</div>

              <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                iPhone 17 {model.name}
              </h3>

              <p className="mb-4 text-sm text-gray-400 sm:text-base">
                Tela de {model.screen}
              </p>

              <ul className="space-y-2 text-sm text-gray-300 sm:text-base">
                <li>Armazenamento: {model.storage}</li>
                <li>Bateria: {model.battery}</li>
                <li>Peso: {model.weight}</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center sm:mt-16">
          <button className="w-full max-w-md cursor-pointer rounded-full bg-blue-700 px-6 py-4 text-base font-medium text-white shadow-md shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:bg-blue-800 sm:w-auto sm:px-8 sm:py-5 sm:text-lg">
            Compre Agora a partir de R$ 9.950,00
          </button>

          <p className="mt-5 text-sm text-gray-400 sm:text-base">
            Ou em até 12x de R$ 829,17 sem juros
          </p>
        </div>
      </div>
    </section>
  );
}

export default Colors;