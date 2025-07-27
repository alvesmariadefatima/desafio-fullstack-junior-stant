const SectionPizza = () => {
    return (
        <section id="home" className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex-shrink-0">
                <img
                    src="/Pizza_derretendo desktop.png"
                    alt="Foto de pizza derretendo"
                    className="w-full rounded-lg object-cover"
                />
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-6">
                <p className="text-orange-400 font-bold uppercase">
                    Por que escolher Pizza SVG
                </p>

                <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
                    A <span className="font-extrabold">melhor Pizza</span> com o melhor atendimento da cidade
                </h2>

                <ul className="space-y-8">
                    <li className="flex flex-col text-left md:flex-row md:items-start md:text-left gap-4">
                        <div className="bg-white p-3 rounded-xl shadow-md w-12 h-12 flex items-center">
                            <img
                                src="/liberty.png"
                                alt="Ícone das mãos apoiando uma medalha"
                                className="w-6 h-6"
                            />
                        </div>
                        <div>
                            <strong>Lorem Ipsum Dolor</strong>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.
                            </p>
                        </div>
                    </li>

                    <li className="flex flex-col text-left md:flex-row md:items-start md:text-left gap-4">
                        <div className="bg-white p-3 rounded-xl shadow-md w-12 h-12 flex items-center">
                            <img
                                src="/manutencao.png"
                                alt="Ícone de manutenção"
                                className="w-6 h-6"
                            />
                        </div>

                        <div>
                            <strong>Lorem Ipsum Dolor</strong>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.
                            </p>
                        </div>
                    </li>

                    <li className="flex flex-col text-left md:flex-row md:items-start md:text-left gap-4">
                        <div className="bg-white p-3 rounded-xl shadow-md w-12 h-12 flex items-center">
                            <img
                                src="/cartao.png"
                                alt="Ícone de cartão de crédito"
                                className="w-6 h-6"
                            />
                        </div>

                        <div>
                            <strong>Lorem Ipsum Dolor</strong>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet consectetur. Etiam pellentesque gravida eu egestas sed quis donec ipsum eu. In viverra velit.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default SectionPizza;