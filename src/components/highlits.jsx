function Highlits() {
  const destaques = [
    {
      imagem: `${import.meta.env.BASE_URL}img/titanium-design.jpg`,
      titulo: 'Design em titânio',
      descricao: 'Elegância, resistência e leveza em cada detalhe.',
    },
    {
      imagem: `${import.meta.env.BASE_URL}img/ios-features.jpg`,
      titulo: 'Experiência iOS',
      descricao: 'Recursos inteligentes para facilitar o seu dia.',
    },
    {
      imagem: `${import.meta.env.BASE_URL}img/chip-a18-pro.jpg`,
      titulo: 'Chip poderoso',
      descricao: 'Desempenho rápido para tarefas e aplicativos exigentes.',
    },
  ]

  return (
    <section className="bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Destaques
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Conheça os detalhes que tornam essa experiência única.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destaques.map((item) => (
            <article
              key={item.titulo}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <img
                src={item.imagem}
                alt={item.titulo}
                className="h-52 w-full object-cover sm:h-60"
              />

              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold sm:text-2xl">
                  {item.titulo}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
                  {item.descricao}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlits