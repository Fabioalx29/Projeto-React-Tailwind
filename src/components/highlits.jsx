function highlits() {



    return (
        <section className="bg-black py-20 px-6 " id="desing">
            <div className="max-w-7xl mx-auto ">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Design Revolucionario</h2>
                    <p className="text-xl text-gray-400 ">Cada Detalhe Foi Pensado Para Criar A Melhor Expêriencia </p>
                </div>





                <div className="grid grid-cols-2 gap-8 mb-16  ">
                    <div className="bg-gray-900 rounded-3xl p-8 transition-all duracion-300 hover:scale-105">
                        <img className="w-full rounded-2xl mb-4" src="/img/titanium-design.jpg" alt="Iphone-Titanium"></img>
                        <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3>
                        <p className="text-gray-300">Estrutura De Titânio De Grau Aerospacional. O Smartphome Mais Forte E Mais Leve.</p>

                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8 transition-all duracion-300 hover:scale-105">
                        <img className="w-full rounded-2xl mb-4" src="/img/ios-features.jpg" alt="Ios 2026"></img>
                        <h3 className="font-bold mb-2 text-3xl">IOS 26</h3>
                        <p className="text-gray-300">O Sistema Operacional Mais Avançado Do Mundo Com IA Integrada</p>
                    </div>
                </div>







                <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="perfomance">
                    <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">O Ship Mais Poderoso Em Um Smartphone</p>
                    <img className="w-full rounded-2xl mb-4-" src="/img/chip-a18-pro.jpg" alt="Chip A18"></img>

                    <ul className="space-y-4 text-gray-300 p-3">
                        <li> Cpu 20% Mais Rapida </li>
                        <li> Cpu 20% Mais Eficiente </li>
                        <li> Neural Engine Com 16 Núcleos </li>
                        <li> Ray Tracing Acelerado Por Hardware </li>
                    </ul>
                </div>




                <div id="camera" className="text-center">
                    <h3 className="text-4xl font-bold mb-10"> Sistema De Câmera Pro Avançado </h3>
                    <div className="grid grid-cols-3 gap-6 ">
                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transicion-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">48MP</div>
                            <h4 className="text-xl font-semibold mb-2">Principal</h4>
                            <p className="text-gray-400">Sensor Quad-iPixel Com Foco Automático</p>
                        </div>


                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transicion-all duration-300">
                            <div className="text-4xl font-bold text-orange-500 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4>
                            <p className="text-gray-400">Campo De Visão De 120º Com Modo Noturno</p>
                        </div>



                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transicion-all duration-300">
                            <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
                            <h4 className="text-xl font-semibold mb-2">Telefoto 5X</h4>
                            <p className="text-gray-400">Zoom Optico De 5X Com Establizaçao</p>
                        </div>
                    </div>
                </div>



















            </div>
        </section>
    )







}
export default highlits 
