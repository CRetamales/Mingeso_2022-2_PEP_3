import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, FormControlLabel, FormGroup, IconButton, Radio,RadioGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";


//Iconos
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


export default function ExtraCard({ extra, addToCart }) {

    const [openDialog, setOpenDialog] = useState(false);
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(extra.cost[0]);



    //Funcion para abrir dialogo
    const handleClickModify = () => {
        setOpenDialog(true);
    }

    //Funcion para cerrar dialogo
    const handleClose = () => {
        setPrice(extra.cost[0]);
        setQty(1);
        setOpenDialog(false);

    }
    

    //Funcion para cambiar la cantidad del extra
    const handleChangeQty = (event) => {
        let newQty = parseInt(event.target.value);
        setQty(newQty);

        //Cambiar el precio del extra
        let newPrice = extra.cost[0];
        handleChangePrice(newPrice, newQty);

    }

    //Funcion para disminuir la cantidad del extra
    const handleDecreaseQty = () => {
        let newQty = qty - 1;
        if (newQty < 1) {
            newQty = 1;
        }
        setQty(newQty);

        //Cambiar el precio del extra
        let newPrice = extra.cost[0];
        handleChangePrice(newPrice, newQty);
    }

    //Funcion para aumentar la cantidad del extra
    const handleIncreaseQty = () => {
        let newQty = qty + 1;
        if (newQty > 50) {
            newQty = 50;
        }
        setQty(newQty);

        //Cambiar el precio del extra
        let newPrice = extra.cost[0];
        handleChangePrice(newPrice, newQty);

    }


    //Funcion para cambiar el precio de la bebida
    const handleChangePrice = (newPrice, newQty) => {
        let price = newPrice * newQty;
        setPrice(price);
    }

    const generateOrder = () => {
        let order = {
            'id': extra.id,
            'name': extra.name,
            'qty': qty,
            'price': price,
            'type': 'extra'
        }
        addToCart(order);
        handleClose();
    }

    return (
        <>
        <Card sx={{ maxWidth: 345, marginLeft: 2, marginRight: 2, marginBottom: 2, backgroundColor: 'whitesmoke' }}>
            <CardMedia component="img" height="140" image={extra.image} alt={extra.name} />
            <CardContent>
                 
                <Typography gutterBottom  variant="h6" component="div"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: '1.2rem',
                        
                        
                    }}
                >
                    <strong> {extra.name} </strong>
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    {/*Precio del extra*/}
                    <strong>Precio:</strong> {extra.cost.map((cost) => (
                        <span key={cost}>${cost}  </span>
                    ))}
                </Typography>

            </CardContent>
            < CardActions> 
                <Button color="success" size="small" variant="text" 
                    onClick={handleClickModify}
                    sx={{
                        fontWeight: 'bold',
                        color: '#228B22',
                        '&:hover': {
                            textDecoration: 'underline',
                        }
                    }}
                >
                    <strong>Modificar</strong> 
                </Button>
            </CardActions>
            <CardActions>
                <Button endIcon={<ShoppingCart />}
                 onClick={generateOrder}
                 size="small" variant="contained" >
                    + Añadir al carrito
                </Button>
            </CardActions>

        </Card>
        {/*Dialogo para modificar extra */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            {/*Mostrar nombre de extra */}
            <DialogContent>
                
                {/*Cantidad de extra */}
                <DialogContentText className="mt-2">Cantidad</DialogContentText>
                <TextField 
                    id="emp-qty"
                    type="number"
                    inputProps={{ min: 1, max: 50, value: qty }}
                    size="small"
                    onChange={handleChangeQty}
                />
                {/*Boton para agregar bebida */}
                <IconButton 
                    color="success"
                    fontSize="large"
                    onClick={() => {
                        handleIncreaseQty();
                    }}
                >
                    <AddCircleOutlineIcon />
                </IconButton>

                {/*Boton para quitar bebida */}
                <IconButton
                    color="error"
                    fontSize="large"
                    onClick={() => {
                        handleDecreaseQty(); 
                    }}
                >
                    <RemoveCircleOutlineIcon />
                </IconButton>

                {/*Precio de extra */}
                

                <DialogContentText className="mt-5"
                    sx={{
                        //A la izquierda
                        display: 'flex',
                        justifyContent: 'flex-start',
                        //tamano de letra
                        fontSize: '1.2rem',

                    }}
                >
                Precio  
                <Typography variant="h4" component="div"
                    sx={{
                        //A la derecha
                        display: 'flex',
                        justifyContent: 'flex-end',
                    
                        //negrita
                        fontWeight: 'bold',
                        //margen izquierdo
                        ml: 2,
                        mt: 0.5,
                    }}
                >
                    
                    <strong>${price}</strong>
                </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {/*Boton para cancelar */}
                <Button onClick={handleClose} color="error"
                    variant="filled"
                    sx={{
                        color: "white",
                        backgroundColor: '#FF0000',
                        '&:hover': {
                            backgroundColor: '#B22222',
                        }
                    }}
                >
                    Cancelar
                </Button>
                {/*Boton para agregar */}
                <Button onClick={generateOrder}
                    color="success"
                    variant="filled"
                    sx={{
                        color: "white",
                        backgroundColor: '#228B22',
                        '&:hover': {
                            backgroundColor: '#006400',
                        }
                    }}

                >
                    + AÑADIR AL CARRITO
                </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

