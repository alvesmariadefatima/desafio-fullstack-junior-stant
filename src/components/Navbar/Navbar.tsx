import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) setIsMounted(true);
    else {
      const timeout = setTimeout(() => setIsMounted(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <nav className="bg-yellow-400 p-4 relative flex items-center justify-between w-full">
      <div className="flex items-center">
        <img
          src="src/assets/logotipo-pizzaria.png"
          alt="Logotipo do Pizza SVG"
          className="h-12 w-auto"
        />
      </div>

      <ul className="hidden md:flex gap-8 text-white">
        <li>
          <a href="#" className="hover:underline">
            BLOCO 1
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            FAQ
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            CONTATO
          </a>
        </li>
      </ul>

      <a 
        href ="https://wa.me/5545988041417?text=Oi%20mensagem%0A"
        target="_blank" 
        className="hidden md:flex items-center gap-2 bg-white px-5 py-2 rounded shadow-md transition-colors">
        <img
          src="src/assets/whatsapp-line.png"
          alt="Ícone do Whatsapp"
          className="h-5 w-5"
        />
        Entrar em contato
      </a>

      <button
        className="md:hidden flex items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu suspenso"
      >
        <img
          src="src/assets/menu-sanduiche.png"
          alt="Menu sanduíche"
          className="h-6 w-6"
        />
      </button>

      {isMounted && (
        <div
          className={`absolute top-16 left-0 w-full bg-yellow-400 px-6 py-6 flex flex-col gap-6 z-50 md:hidden
            transform transition-transform duration-300 ease-in-out origin-top
            ${isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
          `}
        >
          <a
            href="#"
            className="text-white text-lg font-semibold hover:underline text-center"
            onClick={() => setIsOpen(false)}
          >
            Bloco 1
          </a>
          <a
            href="#"
            className="text-white text-lg font-semibold hover:underline text-center"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </a>
          <a
            href="#"
            className="text-white text-lg font-semibold hover:underline text-center"
            onClick={() => setIsOpen(false)}
          >
            CONTATO
          </a>

          <div className="flex justify-center mt-4">
            <a
              href="https://wa.me/5545988041417?text=Oi%20mensagem%0A"
              target="_blank"
              className="flex items-center gap-2 bg-white font-semibold px-6 py-3 rounded shadow-md w-max transition-colors"
            >
              <img
                src="src/assets/whatsapp-line.png"
                alt="Ícone do Whatsapp"
                className="h-6 w-6"
              />
              Entrar em contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;