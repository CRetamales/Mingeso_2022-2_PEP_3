import Navbar from "../components/Navbar"


const Extras = ({ openCart, cart ,addToCart}) => {
    return (
        <>
            <Navbar openCart={openCart} cart={cart} />
        </>
    )
}

export default Extras