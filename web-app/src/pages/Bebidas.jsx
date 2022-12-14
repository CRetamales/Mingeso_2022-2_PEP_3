
//Importacion de librerias
import { Box, Container, Grid} from '@mui/material';

//Componentes
import Navbar from '../components/Navbar';
import DrinkCard from '../components/DrinkCard';

//Data para las bebidas
import productDrink from '../data/productDrink';


const Bebidas = ( { openCart, cart ,addToCart} ) => {
    return (
        <>
            <Navbar openCart={openCart} cart={cart} />
            <Box sx={{ mt: 4 }}>
                <Container maxWidth="lg">
                    <Grid 
                        container
                        justifyContent={'center'}
                        sx={{ margin: '20px 4px 10px 4px' }}
                    >
                        {/*<div key = {index}> beb.name*/}
                        {productDrink.map((beb, index) => (
                            <DrinkCard key={index} drink={beb} addToCart={addToCart} />
                        ))}

                        
                            
                            

                    </Grid>
                </Container>
            </Box>
            
        </>
    )
}

export default Bebidas;