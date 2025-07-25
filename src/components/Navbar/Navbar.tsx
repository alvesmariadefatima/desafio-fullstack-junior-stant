const Navbar = () => {
    return (
        <nav className="bg-yellow-400 flex items-center justify-center p-4 relative">
            <div className="absolute left-4">
                <img 
                    src="src/assets/logotipo-pizzaria.png" 
                    alt="Logotipo do Pizza SVG"
                    className="h-12 w-auto" 
                />
            </div>

            <ul className="flex gap-6">
                <li>
                    <a 
                        className="text-white hover:underline"
                        href="#"
                        target="_blank">
                        Bloco 1
                    </a>
                </li>

                <li>
                    <a 
                        className="text-white hover:underline"
                        href="#"
                        target="_blank">
                        FAQ
                    </a>
                </li>

                <li>
                    <a 
                        className="text-white hover:underline"
                        href="#"
                        target="_blank">
                        CONTATO
                    </a>
                </li>
            </ul>
            <button className="absolute right-4 top-2-translate-y-1 bg-white flex items-center gap-2 px-4 py-2 rounded">
                <img 
                    src="src/assets/whatsapp-line.png" 
                    alt="Ícone do Whatsapp"
                    className="h-5 w-5" 
                />
                    Entre em contato
                </button>
        </nav>
    )
}

export default Navbar