export const updateCart = (product, cart) => {
    console.log('product, cart', product, cart);
    // si el carrito está vacío
    // if (!cart.length) {
    //   return [...cart, product];
    // }

    // si el producto no está en el carrito
    if (!cart.some(cartItem => cartItem.id === product.id)) {
      if (product.qty) {
        return [...cart, product];
      } else {
        return [...cart];
      }
    }

    // Si el producto ya está en el carrito
    return cart.map(cartItem => {
      if (cartItem.id === product.id) {
        if (product.qty > 0) {
          cartItem.qty = product.qty;
          return cartItem;
        }
        // Si la cantidad del item es 0, queda fuera del cart
        return false;
      } else {
        // Si el item del carrito no coincide con el producto, no se modifica
        return cartItem;
      }
    }).filter(Boolean);
  };

// const flushCart = () => { cartList = [] }
  
export const removeFromCart = (productId, cart) => {
    return cart.filter(item => item.id !== productId )
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

