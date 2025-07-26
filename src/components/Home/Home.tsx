import Navbar from "../Navbar/Navbar"
import SectionPizza from "../SectionPizza/SectionPizza"

const Home = () => {
    return (
        <>
            <Navbar />
            <img 
                src="src/assets/BANNER DESKTOP.png" 
                alt="Banner da Pizzaria (Versão Desktop)"
                className="hidden md:block w-full"
            />

            <img 
                src="src/assets/BANNER MOBILE.png" 
                alt="Banner da Pizzaria SVG (Versão Mobile)" 
                className="block md:hidden w-full"
            />

            <SectionPizza />
        </>
    )
}

export default Home