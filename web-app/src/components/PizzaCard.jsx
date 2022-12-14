import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, FormControlLabel, FormGroup, IconButton, Radio,RadioGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";

//Iconos
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { padding } from "@mui/system";

export default function PizzaCard({ pizza }) {

    const [openDialog, setOpenDialog] = useState(false);
    const [preparationMass, setPreparationMass] = useState(pizza.typemass);
    const [size , setSize] = useState(pizza.size[1]);
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(pizza.cost[1]);

    //Funcion para cambiar el tipo de masa
    const handleChangePreparationMass = (event) => {
        setPreparationMass(event.target.name);
    };

    //Funcion para abrir dialogo
    const handleClickModify = () => {
        setOpenDialog(true);
    }

    //Funcion para cerrar dialogo
    const handleClose = () => {
        setSize(pizza.size[1]);
        setPrice(pizza.cost[1]);
        setPreparationMass("normal");
        setQty(1);
        setOpenDialog(false);

    }
    
    //Funcion para cambiar el tamaño de la pizza
    const handleChangeSize = (event) => {
        let newSize = event.target.value;
        setSize(newSize);

        //Cambiar el precio de la pizza
        let sizeIndex = pizza.size.indexOf(newSize);
        let newPrice = pizza.cost[sizeIndex];
        handleChangePrice(newPrice, qty);

    }

    //Funcion para cambiar la cantidad de pizzas
    const handleChangeQty = (event) => {
        let newQty = parseInt(event.target.value);
        setQty(newQty);

        //Cambiar el precio de la pizza
        let sizeIndex = pizza.size.indexOf(size);
        let newPrice = pizza.cost[sizeIndex];
        handleChangePrice(newPrice, newQty);

    }

    //Funcion para disminuir la cantidad de pizzas
    const handleDecreaseQty = () => {
        let newQty = qty - 1;
        if (newQty < 1) {
            newQty = 1;
        }
        setQty(newQty);

        //Cambiar el precio de la pizza
        let sizeIndex = pizza.size.indexOf(size);
        let newPrice = pizza.cost[sizeIndex];
        handleChangePrice(newPrice, newQty);
    }

    //Funcion para aumentar la cantidad de pizzas
    const handleIncreaseQty = () => {
        let newQty = qty + 1;
        if (newQty > 50) {
            newQty = 50;
        }
        setQty(newQty);

        //Cambiar el precio de la pizza
        let sizeIndex = pizza.size.indexOf(size);
        let newPrice = pizza.cost[sizeIndex];
        handleChangePrice(newPrice, newQty);
    }


    //Funcion para cambiar el precio de la pizza
    const handleChangePrice = (newPrice, newQty) => {
        let price = newPrice * newQty;
        setPrice(price);
    }



    return (
        <>
        <Card sx={{ maxWidth: 345, marginLeft: 2, marginRight: 2, marginBottom: 2, backgroundColor: 'whitesmoke' }}>
            <CardMedia component="img" height="140" image={pizza.image} alt={pizza.name} />
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
                    <strong>Pizza {pizza.name}</strong>
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    {/*Tamaño de la pizza */}
                    <strong>Tamaño: </strong>
                    {pizza.size.join(', ')}.
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    {/*Precio de la pizza*/}
                    <strong>Precio:</strong> {pizza.cost.map((cost) => (
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
                <Button endIcon={<ShoppingCart />} size="small" variant="contained" >
                    + Añadir al carrito
                </Button>
            </CardActions>

        </Card>
        {/*Dialogo para modificar pizza */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
            {/*Mostrar nombre de pizza */}
            <DialogContent>
                <Typography variant="h6" component="div">
                    <strong>Modificar Pizza {pizza.name}</strong>
                </Typography>
                <DialogContentText> Tipo de Masa</DialogContentText>
                <FormGroup>
                    {/*Masa de la pizza normal o delgada */}
                    <FormControlLabel 
                        control = {
                            <Checkbox 
                                checked={preparationMass === 'normal' ? true : false}
                                name="normal"
                                onChange={handleChangePreparationMass}
                            />
                            }
                            label="Normal"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={preparationMass === 'delgada' ? true : false}
                                name="delgada"
                                onChange={handleChangePreparationMass}
                            />
                        }
                        label="Delgada"
                    />
                </FormGroup>
                <DialogContentText className="mt-2">Tamaño</DialogContentText>
                <RadioGroup
                    row
                    aria-aria-labelledby="demo-row-radio-butoons-group-label"
                    name="row-radio-buttons-group"
                >
                    {/*Tamaño de la pizza */}
                    {pizza.size.map((s, index) => {
                        return (
                            <FormControlLabel
                                key={index}
                                value={s}
                                control={<Radio />}
                                label={s}
                                checked={size === s ? true : false}
                                onChange={handleChangeSize}
                            />
                        )
                    })}
                </RadioGroup>
                {/*Cantidad de pizza */}
                <DialogContentText className="mt-2">Cantidad</DialogContentText>
                <TextField 
                    id="emp-qty"
                    type="number"
                    inputProps={{ min: 1, max: 50, value: qty }}
                    size="small"
                    onChange={handleChangeQty}
                />
                {/*Boton para agregar pizza */}
                <IconButton 
                    color="success"
                    fontSize="large"
                    onClick={() => {
                        handleIncreaseQty();
                    }}
                >
                    <AddCircleOutlineIcon />
                </IconButton>

                {/*Boton para quitar pizza */}
                <IconButton
                    color="error"
                    fontSize="large"
                    onClick={() => {
                        handleDecreaseQty(); 
                    }}
                >
                    <RemoveCircleOutlineIcon />
                </IconButton>

                {/*Precio de la pizza */}
                

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
                {/*Boton para cancelar relleno*/}
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
                <Button onClick={() => setOpenDialog(false)} color="success"
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