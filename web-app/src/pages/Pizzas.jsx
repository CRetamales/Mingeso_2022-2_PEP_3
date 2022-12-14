
//Importacion de librerias
import { Box, Container, Grid} from '@mui/material';



//Componentes
import Navbar from '../components/Navbar';
import PizzaCard from '../components/PizzaCard';

//Data para las pizzas
import productPizza from '../data/productPizza';

const Pizzas = () => {
    return (
        <>
            <Box sx={{ mt: 4 }}>
                <Container maxWidth="lg">
                    <Grid 
                        container
                        justifyContent={'center'}
                        sx={{ margin: '20px 4px 10px 4px' }}
                    >
                        {/*<div key = {index}> pza.name*/}
                        {productPizza.map((pza, index) => (
                            <PizzaCard key={index} pizza={pza} />
                        ))}

                        
                            
                            

                    </Grid>
                </Container>
            </Box>
            
        </>
    )
}

export default Pizzas;