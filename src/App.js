import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

	const falseProducts = [
		{
			id: 1,
			name: 'Dhali La persistencia de la memoria',
			stock: 5
		},
		{
			id: 2,
			name: 'Vangoh La noche estrellada',
			stock: 3
		},
		{
			id: 2,
			name: 'Munch El grito',
			stock: 3
		}
	];

	const addedToCart = [
		{
			id: 1,
			name: 'Producto 1',
			added: 5
		},
		{
			id: 2,
			name: 'Producto 2',
			added: 5
		}
	];

	// const onBuy = (e) => {

	// }
  return (
    <>
	    <NavBar productsInCart={addedToCart}/>
	    <ItemListContainer productList={falseProducts} greeting ="Proximamente abriremos tienda online"/>
    </>
  );
}

export default App;