export let cartList = [];

export const addToCart = (product) => {
    if (!cartList.some(item => item.id === product.id)) {
      cartList.push(product);
      return;
    }
    cartList.forEach(item => {
      if (item.id === product.id) {
        item.qty = product.qty;
      }
    })
  };

const flushCart = () => { cartList = [] }
  
export const removeFromCart = (productId) => {
    cartList = cartList.filter(item => item.id !== productId )
    console.log("cartList en removeFromCart", cartList)
  }

const handleCategory = (e, category) => {
    e.preventDefault();
    // setCategory(category);
  }

export const categories = [
    { component: 'Surrealismo', title: 'Surrealismo', path: `/`, handleClick: (e) => handleCategory(e, 'Surrealismo') },
    { component: 'Impresionismo', title: 'Impresionismo', path: `/`, handleClick: (e) => handleCategory(e, 'Impresionismo') },
    { component: 'Expresionismo', title: 'Expresionismo', path: `/`, handleClick: (e) => handleCategory(e, 'Expresionismo') },
    { component: 'Cubismo', title: 'Cubismo', path: `/credits`, handleClick: (e) => handleCategory(e, 'Cubismo') },
  ];

