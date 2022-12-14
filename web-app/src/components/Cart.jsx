import { Box, Drawer, Typography } from "@mui/material"

export default function Cart({cart, showCart, closeCart}) {
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
            </Box>
            

        </Drawer>
    )
}