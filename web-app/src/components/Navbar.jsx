
//Importacion de librerias
//Mui
import { AppBar,Badge,Container, Toolbar, Tooltip,Box, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
//Iconos
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//Importar data
import pages from '../data/pages';

export default function Navbar({ openCart, cart }) {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: 'whitesmoke' }}>
                <Container maxWidth="xl" className="container-Home-Joe">
                    <Toolbar variant="dense">
                        <Box sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            mr: 20
                        }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page.href}
                                    href={page.href}
                                    sx={{
                                        color: 'black',
                                        padding: '0.5rem 2rem',
                                        fontSize: '1.2rem',
                                        '&:hover': {
                                            backgroundColor: '#A31621',
                                            color: 'white'
                                        }
                                    }}

                                >
                                    {page.text}
                                </Button>
                            ))}
                        </Box>
                        {/* Carrito de compras a la derecha de la barra de navegación*/}
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            flexGrow: 1,
                        }}
                        onClick={() => openCart()}
                        >
                            
                            <Badge badgeContent={cart && cart.length}
                            color="error">
                                
                                <ShoppingCartIcon  sx={{ color: 'black' }} />
                            </Badge>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
