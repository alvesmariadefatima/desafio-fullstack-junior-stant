const Footer = () => {
    return (
        <footer className="bg-yellow-400 py-6 px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-2">
                <img 
                    src="/logotipo-pizzaria.png" 
                    alt="Logotipo da Pizza SVG" 
                    className="w-24 h-auto mb-4"
                />
            </div>
            <p className="text-white text-center font-bold text-lg">Endereço</p>
            <p className="text-white text-center text-sm sm:text-base">Av. Brasil, 74 - Foz do Iguaçu - CEP</p>
            <p className="text-white text-center text-sm sm:text-base">85851-000</p>
        </footer>
    )
}

export default Footer