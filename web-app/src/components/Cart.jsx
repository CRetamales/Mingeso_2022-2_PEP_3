import { Box, Drawer, Paper, Typography,Button } from "@mui/material"
import { useState, useEffect } from "react"

export default function Cart({cart, showCart, closeCart}) {
    const [total, setTotal] = useState(0)

    const getTotal = () => {
        let total = 0
        if(cart.length > 0) {
            cart.map((order) => {
                total = total + order.price
            })
        }
        setTotal(total)
    }

    const handleCheckout = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('total_cart', total);
        window.location.href = '/checkout';
    }

    useEffect(() => {


        getTotal()
    }, [cart])


    const cartContent = cart.map((order, index) => {
        return (
            <Box key={index}>
                <Box
                    display="flex"
                    alignItems="start"
                    sx={{pt: 2, pb: 2, pr: 2, pl: 2}}
                    justifyContent="space-between"
                >
                    <Box display="flex" flexDirection="column" sx={{mr: 2}}>
                        <Typography>{order.name}</Typography>
                        <Typography variant="subtitle2"> Tamaño {order.size} | Masa {order.typemass} </Typography>
                        <Typography variant="subtitle2"> Cantidad: {order.qty} </Typography>
                    </Box>
                    <Typography variant="h6"> ${order.price} </Typography>
                </Box>
            </Box>
        )
    })

    return (
        <Drawer
            open={showCart}
            anchor="right"
            onClose={() => closeCart()}
            PaperProps={{
                sx: {
                    width: 400,
                    
                    bgcolor: 'background.default'
                }
            }}
        >
            <Box
                sx={{p: 4}}
                display="flex"
                flexDirection="column"
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Typography variant="h5" component="h5"
                    sx={
                        {
                            fontWeight: 'bold',
                            color: 'black',
                            textAlign: 'center',
                            mb: 2
                        }    
                    }
                >
                    Carrito de compras
                </Typography>
                <Paper>
                    {cartContent}
                </Paper>
                <Typography> Total: $ <b>{total}</b> CLP</Typography>
                
                {total > 0 ?
                    <Button variant="contained" sx={{mt: 2}} onClick={handleCheckout}>
                        Proceder a pagar
                    </Button> :
                    <div className="mt-2">Tu carrito está vacio</div>
                }
            </Box>
            

        </Drawer>
    )
}