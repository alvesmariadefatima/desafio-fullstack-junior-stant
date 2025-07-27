const Banner = () => {
    return (
        <>
            <img 
                src="/BANNER DESKTOP.png" 
                alt="Banner da Pizzaria (Versão Desktop)"
                className="hidden md:block w-full"
            />

            <img 
                src="/BANNER MOBILE.png" 
                alt="Banner da Pizzaria SVG (Versão Mobile)" 
                className="block md:hidden w-full"
            />
        </>
    )
}

export default Banner