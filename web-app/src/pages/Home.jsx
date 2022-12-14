
//Importacion de librerias




//Componentes
import Navbar from '../components/Navbar';

const Home = ( { openCart, cart } ) => {
    return (
        <>
            <Navbar openCart={openCart} cart={cart} />
            <div>
            <h1>Home</h1>

            </div>
        </>
    );
    }

export default Home;