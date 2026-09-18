function Hero() {
  return (
    <section className="relative flex min-h-[650px] h-screen items-center justify-center overflow-hidden bg-black px-4 sm:min-h-[700px]">
      <div className="absolute inset-0 top-16 z-0 flex items-center justify-center">
        <img
          src={`${import.meta.env.BASE_URL}img/hero.jpg`}
          className="h-auto w-[95%] max-w-[1200px] object-contain opacity-90 sm:w-[90%] lg:w-[85%]"
          alt="Imagem principal do iPhone"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90"></div>
      </div>

      <div className="relative z-10 mt-auto mb-24 text-center sm:mb-20">
        <h1 className="text-3xl font-bold sm:text-5xl lg:text-7xl">
          Tecnologia que impressiona.
        </h1>

        <p className="mt-4 text-sm text-gray-300 sm:text-lg lg:text-xl">
          Design, potência e inovação em um só lugar.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="size-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero