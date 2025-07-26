import Navbar from "../Navbar/Navbar"
import SectionPizza from "../SectionPizza/SectionPizza"
import Banner from "../Banner/Banner"
import FAQSection from "../FAQSection/FAQSection"
import Contact from "../Contact/Contact"

const Home = () => {
    return (
        <>
            <Navbar />

            <Banner />

            <SectionPizza />

            <FAQSection />

            <Contact />
        </>
    )
}

export default Home