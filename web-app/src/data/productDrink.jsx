
import drinkCocaCola from '../data/images/drinkCocaCola.jpg';
import drinkFanta from '../data/images/drinkFanta.jpg';
import drinkWattsDurazno from '../data/images/drinkWattsDurazno.jpg';
import drinkWattsPina from '../data/images/drinkWattsPina.jpg';
import drinkCachantunConGas from '../data/images/drinkCachantunConGas.jpg';
import drinkCachantunSinGas from '../data/images/drinkCachantunSinGas.jpg';

const productDrink = [
    { 'id': 1, 'name': 'Coca Cola', 'cost': [1300,2500], 'size': ['500','1000'] , 'type': 'bebidas', 'image': drinkCocaCola },
    { 'id': 2, 'name': 'Fanta', 'cost': [1300,2500], 'size': ['500','1000'] , 'type': 'bebidas' , 'image': drinkFanta},
    { 'id': 3, 'name': 'Watts Durazno', 'cost': [1200,2400], 'size': ['500','1000'], 'type': 'jugos' , 'image': drinkWattsDurazno},
    { 'id': 4, 'name': 'Watts Piña', 'cost': [1200,2400], 'size': ['500','1000'] , 'type': 'jugos'   , 'image': drinkWattsPina},
    { 'id': 5, 'name': 'Cachantun con Gas', 'cost': [1000,1800], 'size': ['500','1000'] , 'type': 'agua' , 'image': drinkCachantunConGas},
    { 'id': 6, 'name': 'Cachantun sin Gas', 'cost': [1000,1800], 'size': ['500','1000'] , 'type': 'agua' , 'image': drinkCachantunSinGas},
]

export default productDrink;