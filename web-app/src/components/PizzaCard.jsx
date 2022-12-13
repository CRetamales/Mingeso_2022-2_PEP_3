import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function PizzaCard({ pizza }) {
    return (
        <Card sx={{ maxWidth: 345, marginLeft: 2, marginRight: 2, marginBottom: 2 }}>
            <CardMedia component="img" height="140" image={pizza.image} alt={pizza.name} />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Pizza {pizza.name}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    {/*Tamaño de la pizza*/}
                    Tamaños: {pizza.size.join(', ')}.
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    {/*Precio de la pizza*/}
                    Precio: {pizza.cost.map((cost) => (
                        <span key={cost}>${cost} CLP </span>
                    ))}
                </Typography>

            </CardContent>

        </Card>
    )
}