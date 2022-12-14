
//Pagina principal de una pizzeria 
//Importacion de librerias

import {Box, ButtonBase, Grid, Typography} from '@mui/material';

//Componentes
import Navbar from '../components/Navbar';

//Imagenes
import fondo from '../data/images/fondo.jpg';

const Home = ( { openCart, cart } ) => {
    return (
        <>
            <Navbar openCart={openCart} cart={cart} />
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundImage: `url(${fondo})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '100vh',
                }}
            >
                <Typography variant="h1" sx={{color: 'white', fontWeight: 'bold', fontSize: '5rem', textAlign: 'center', marginBottom: '1rem'}}>
                    Bienvenido a la pizzeria
                </Typography>
                <Typography variant="h2" sx={{color: 'white', fontWeight: 'bold', fontSize: '3rem', textAlign: 'center', marginBottom: '1rem'}}>
                    Joe's Pizza
                </Typography>
                <ButtonBase sx={{backgroundColor: 'white', padding: '1rem', borderRadius: '1rem', marginTop: '1rem'}}>
                    <Typography variant="h3" sx={{color: 'black', fontWeight: 'bold', fontSize: '2rem', textAlign: 'center'}}>
                        Ver menú
                    </Typography>
                </ButtonBase>
            </Box>



        </>
    );
    }

export default Home;