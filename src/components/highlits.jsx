function Highlits() {
  return (
    <section className="bg-black py-20 px-6 text-white" id="desing">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Design Revolucionário
          </h2>

          <p className="text-xl text-gray-400">
            Cada detalhe foi pensado para criar a melhor experiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

          <div className="bg-gray-900 rounded-3xl p-8 transition-all duration-300 hover:scale-105">
            <img
              className="w-full h-72 object-cover rounded-2xl mb-6"
              src={`${import.meta.env.BASE_URL}img/titanium-design.jpg`}
              alt="iPhone com acabamento de titânio"
            />

            <h3 className="font-bold mb-3 text-3xl">
              Titânio Premium
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Estrutura de titânio de grau aeroespacial. Um smartphone
              forte, resistente e leve.
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8 transition-all duration-300 hover:scale-105">
            <img
              className="w-full h-72 object-cover rounded-2xl mb-6"
              src={`${import.meta.env.BASE_URL}img/ios-features.jpg`}
              alt="Recursos do sistema iOS"
            />

            <h3 className="font-bold mb-3 text-3xl">
              iOS 26
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Um sistema operacional avançado, com recursos inteligentes
              e integração de inteligência artificial.
            </p>
          </div>

        </div>

        <div
          className="bg-gray-900 rounded-3xl p-8 md:p-12 mb-16"
          id="perfomance"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            A18 Pro
          </h3>

          <p className="text-gray-300 text-lg mb-8">
            O chip mais poderoso em um smartphone.
          </p>

          <img
            className="w-full max-h-[500px] object-cover rounded-2xl mb-8"
            src={`${import.meta.env.BASE_URL}img/chip-a18-pro.jpg`}
            alt="Chip A18 Pro"
          />

          <ul className="space-y-4 text-gray-300 p-3">
            <li className="flex items-center gap-3">
              <span className="text-blue-500 text-xl">✓</span>
              CPU 20% mais rápida
            </li>

            <li className="flex items-center gap-3">
              <span className="text-blue-500 text-xl">✓</span>
              CPU 20% mais eficiente
            </li>

            <li className="flex items-center gap-3">
              <span className="text-blue-500 text-xl">✓</span>
              Neural Engine com 16 núcleos
            </li>

            <li className="flex items-center gap-3">
              <span className="text-blue-500 text-xl">✓</span>
              Ray Tracing acelerado por hardware
            </li>
          </ul>
        </div>

        <div id="camera" className="text-center">

          <h3 className="text-4xl md:text-5xl font-bold mb-10">
            Sistema de Câmera Pro Avançado
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-4">
                48MP
              </div>

              <h4 className="text-xl font-semibold mb-2">
                Principal
              </h4>

              <p className="text-gray-400">
                Sensor Quad-Pixel com foco automático.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
              <div className="text-4xl font-bold text-orange-500 mb-4">
                12MP
              </div>

              <h4 className="text-xl font-semibold mb-2">
                Ultra Wide
              </h4>

              <p className="text-gray-400">
                Campo de visão de 120º com modo noturno.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-4">
                12MP
              </div>

              <h4 className="text-xl font-semibold mb-2">
                Telefoto 5X
              </h4>

              <p className="text-gray-400">
                Zoom óptico de 5X com estabilização.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Highlits