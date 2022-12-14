//Los componentes de mui para hacer el footer
import { Box, Container, Grid, Typography, TextField, Button , IconButton, Link, Stack, Divider, AppBar} from '@mui/material';
//Icono 
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import JavascriptIcon from '@mui/icons-material/Javascript';



export default function Footer() {
    return (
        <>
        {/*Footer que se encuentra en la parte inferior de la pagina*/}
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" sx={{ background: "#E8E8E8", width: '100%',}}>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h5" className="mb-2 mt-4">Contacto</Typography>
                            <Typography variant="body1" className="mb-2 mt-4">Teléfono: 123456789</Typography>
                            <Typography variant="body1" className="mb-2 mt-4">Correo: 
                                <Link href="mailto:
                                " color="inherit" underline="hover">
                                    @gmail.com
                                </Link>
                            </Typography>
                            <Typography variant="body1" className="mb-2 mt-4">Dirección:
                                <Link href="https://goo.gl/maps/4Q4Z9Z9Z9Z9Z9Z9Z9" color="inherit" underline="hover">
                                    Calle 123, Colonia 123, C.P. 12345
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h5" className="mb-2 mt-4">Redes sociales</Typography>
                            <Stack direction="row" spacing={2} className="mb-2 mt-4">
                                <IconButton>
                                    <Facebook />
                                </IconButton>
                                <IconButton>
                                    <Instagram />
                                </IconButton>
                                <IconButton>
                                    <Twitter />
                                </IconButton>
                            </Stack>
                            <Typography variant="h5" className="mb-2 mt-4">Horario</Typography>
                            <Typography variant="body1" className="mb-2 mt-4">Lunes a viernes: 9:00 a.m. - 9:00 p.m.</Typography>
                            <Typography variant="body1" className="mb-2 mt-4">Sábado y domingo: 9:00 a.m. - 10:00 p.m.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h5" className="mb-2 mt-4">Suscríbete</Typography>
                            <Typography variant="body1" className="mb-2 mt-4">Recibe las mejores ofertas y promociones</Typography>
                            <TextField
                                id="standard-helperText"
                                label="Correo electrónico"
                                variant="outlined"
                                fullWidth
                                size="small"
                            />
                            <Button variant="contained" color="success" className="mt-4 mb-4">Suscribirse</Button>
                        </Grid>
                    </Grid>
                    <Divider sx={{ my: 2 }} />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="mb-2 mt-4">© 2022 Todos los derechos reservados</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" className="mb-2 mt-4" align="right">Hecho con <JavascriptIcon />  por
                                <Link href="
                                " color="inherit" underline="hover">
                                    @gmail.com
                                </Link>
                            </Typography>
                            

                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        </Box>
        </>
    )
}
