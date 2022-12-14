//Importacion de librerias
import { Box, Container, Grid} from '@mui/material';

//Componentes
import Navbar from '../components/Navbar';
import ExtraCard from '../components/ExtraCard';

//Data para las bebidas
import productExtra from '../data/productExtra';



const Extras = ( { openCart, cart ,addToCart} ) => {
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
                        
                        {productExtra.map((extr, index) => (
                            <ExtraCard key={index} extra={extr} addToCart={addToCart} />
                        ))}

                        
                            
                            

                    </Grid>
                </Container>
            </Box>
            
        </>
    )
}
export default Extras