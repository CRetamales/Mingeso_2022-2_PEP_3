/* Componente de Header que muestra un icono de la pizzeria, el nombre de la pizzeria 
Una burbuja para iniciar sesion , dropdown para cambiar el idioma y un icono para 
cambiar a dark mode */

//Librerias
//Mui
import { AppBar,Container, Toolbar, Tooltip,Box, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
//Iconos
//Pizza
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
//Darkmode
import Brightness4Icon from '@mui/icons-material/Brightness4';
//Cuenta
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LanguageIcon from '@mui/icons-material/Language';
import * as React from 'react';

//Pages para el dropdown de cuenta 
import pages from '../data/pages';

export default function Header() {

    //Dropdown de cuenta
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    //Funcion para abrir el dropdown de cuenta
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    //Dropdown de idioma
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    //Dropdown de darkmode
    const [anchorEl3, setAnchorEl3] = React.useState(null);
    const open3 = Boolean(anchorEl3);
    const handleClick3 = (event) => {
        setAnchorEl3(event.currentTarget);
    };

    const handleClose3 = () => {
        setAnchorEl3(null);
    };






    return (
        <>
            <AppBar position="static" style={{ backgroundColor: 'whitesmoke' }}>
                <Container maxWidth="xl">
                    <Toolbar variant="dense">
                        {/* Parte izquierda del header Responsive */}

                        <LocalPizzaIcon sx={{ display: { xs: 'none', sm: 'block' }, color: '#A31621', fontSize: '40' }} />
                        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#A31621', fontSize: '30' }}>
                            Joe's Pizza
                        </Typography>
                        {/* Parte izquierda del header para mobile */}
                        <LocalPizzaIcon sx={{ display: { xs: 'block', sm: 'none' }, color: '#A31621', fontSize: '40' }} />
                        <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' }, color: '#A31621', fontSize: '30' }}>
                            Joe's Pizza
                        </Typography>

                        
                        {/* Parte derecha del header, Icono de cuenta que tiene dropdown, icono de darkmode, y dropdown para el cambiar el idioma*/}
                        {/* Opciones del dropdown de cuenta */}
                                {/*Siendo para iniciar sesion (boton con borde)
                                    una etiqueta para decir "¿Eres nuevo?" con un boton para registrarse (sin borde)
                                    y las opciones del dropdown: mi cuenta y mis pedidos (estos tienen un icono al lado)*/}
                        <Tooltip title="Cuenta" arrow>
                            <IconButton onClick={handleClick} sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <AccountCircleIcon sx={{ color: '#A31621', fontSize: '40' }} />
                            </IconButton>
                        </Tooltip>
                        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose} PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }} transformOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                            <MenuItem>
                                {/*Iniciar sesion href="/login"*/}
                                <Button variant="outlined" sx={{ color: '#A31621', borderColor: '#A31621' }} href="/login" key="/login">Iniciar sesion</Button>

                            </MenuItem>
                            <MenuItem>
                                <Typography variant="body2" sx={{ color: '#A31621' }}>¿Eres nuevo?</Typography>
                                <Button sx={{ color: '#A31621' }}>Registrate</Button>
                            </MenuItem>
                            <MenuItem>
                                <PersonIcon sx={{ color: '#A31621', fontSize: '30' }} />
                                <Typography variant="body2" sx={{ color: '#A31621' }}>Mi cuenta</Typography>
                            </MenuItem>
                            <MenuItem>
                                <NoteAltIcon sx={{ color: '#A31621', fontSize: '30' }} />
                                <Typography variant="body2" sx={{ color: '#A31621' }}>Mis pedidos</Typography>
                            </MenuItem>
                        </Menu>
                        
                        {/* Opciones del dropdown de darkmode */}
                        <Tooltip title="Darkmode" arrow>
                            <IconButton onClick={handleClick3} sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <Brightness4Icon sx={{ color: '#A31621', fontSize: '40' }} />
                            </IconButton>
                        </Tooltip>
                        <Menu anchorEl={anchorEl3} open={open3} onClose={handleClose3} onClick={handleClose3} PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }} transformOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                            <MenuItem>
                                <Brightness4Icon sx={{ color: '#A31621', fontSize: '30' }} />
                                <Typography variant="body2" sx={{ color: '#A31621' }}>Darkmode</Typography>
                            </MenuItem>
                        </Menu>

                        {/* Opciones del dropdown de idioma ES por defecto, pero se puede cambiar a EN */}
                        <Tooltip title="Idioma" arrow>
                            <IconButton onClick={handleClick2} sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <LanguageIcon sx={{ color: '#A31621', fontSize: '40' }} />
                            </IconButton>
                        </Tooltip>
                        <Menu anchorEl={anchorEl2} open={open2} onClose={handleClose2} onClick={handleClose2} PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }} transformOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                            <MenuItem>
                                <LanguageIcon sx={{ color: '#A31621', fontSize: '30' }} />
                                <Typography variant="body2" sx={{ color: '#A31621' }}>Idioma</Typography>
                            </MenuItem>
                            <MenuItem>
                                <Typography variant="body2" sx={{ color: '#A31621' }}>Español</Typography>
                            </MenuItem>
                            <MenuItem>
                                <Typography variant="body2" sx={{ color: '#A31621' }}>Ingles</Typography>
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}