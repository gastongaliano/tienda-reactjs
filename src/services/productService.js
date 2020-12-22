const products = [
	{
		id: 1,
		title: 'Dali - La persistencia de la memoria',
		initial: 2,
		stock: 5,
		price: "$149.99",
		description:
			"El mítico cuadro de relojes blandos de Dalí es, al contrario de lo que muchos piensan, un lienzo bastante pequeño, pero no deja de ser fascinante y es una de las estrellas del MoMA de Nueva York.",
		imageUrl: "https://via.placeholder.com/600/92c952",
		thumbnail: "https://via.placeholder.com/150/92c952"
	},
	{
		id: 2,
		title: 'Van Ghog - La noche estrellada',
		initial: 0,
		stock: 3,
		description:
      "El cuadro La Noche Estrellada de Vincent Van Gogh es una de las obras más famosas del mundo, apreciada por décadas por sus formas sinuosas y azules profundos, para decorar es un gran valor.",
		imageUrl: "https://via.placeholder.com/600/92c952",
		thumbnail: "https://via.placeholder.com/150/92c952"
	},
	{
		id: 3,
		title: 'Munch - El grito',
		initial: 1,
		stock: 3,
		description:
      "El grito es el título de cuatro cuadros del noruego Edvard Munch. La versión más famosa se encuentra en la Galería Nacional de Noruega y fue completada en 1893.​",
		imageUrl: "https://via.placeholder.com/600/92c952",
		thumbnail: "https://via.placeholder.com/150/92c952"
	},
	{
		id: 4,
		title: 'Van Ghog - Girasoles',
		initial: 0,
		stock: 3,
		description:
      "Los girasoles es una serie de cuadros al óleo realizados por el pintor neerlandés Vincent van Gogh. De la serie hay tres cuadros similares con catorce girasoles en un jarrón, dos con doce girasoles, uno con tres y otro con cinco.",
		imageUrl: "https://via.placeholder.com/600/92c952",
		thumbnail: "https://via.placeholder.com/150/92c952"
	},
	{
		id: 5,
		title: 'Munch - El baile de la vida',
		initial: 1,
		stock: 3,
		description:
      "Obra llena de símbolos, donde el autor viene a significar multitud de mensajes, los cuales han sido objeto de extensas interpretaciones por parte de los expertos.",
		imageUrl: "https://via.placeholder.com/600/92c952",
		thumbnail: "https://via.placeholder.com/150/92c952"
	},
	{
		id: 6,
		title: 'Van Ghog - Autorretrato',
		initial: 1,
		stock: 3,
		description:
      "El autorretrato de 1889 es un óleo sobre lienzo pintado por Vincent van Gogh. El cuadro, que podría ser el último autorretrato de van Gogh y es el más conocido del artista, fue pintado en septiembre de ese año.",
		imageUrl: "https://via.placeholder.com/600/92c952",
		thumbnail: "https://via.placeholder.com/150/92c952"
	}
];

const getProducts = () => new Promise((resolve, reject) => 
			setTimeout(() => resolve(products), 2000));

export default getProducts;