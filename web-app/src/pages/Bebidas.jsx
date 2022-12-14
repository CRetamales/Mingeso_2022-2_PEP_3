import Navbar from "../components/Navbar"


const Bebidas = ({ openCart, cart ,addToCart}) => {
    return (
        <>
            <Navbar openCart={openCart} cart={cart} />
        </>
    )
}

export default Bebidas