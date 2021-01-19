import React, {useEffect, useState, useContext} from "react";
import Card from "@material-ui/core/Card";
import { CardHeader, CardContent, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";
import { getItemById } from "../../services/productService";
import ItemCount from "../Counter/ItemCount"
import { ProductContext } from "../../App";

function ItemDetails({match}) {
  const { onAddToCart, renderCart } = useContext(ProductContext)
  const [item, setItem] = useState({});
  const [qty, setQty] = useState(0);
  const [button, setButton] = useState('buyButton');

  const { thumbnail = '', title, subtitle, description, image = '', stock, price } = item || {};
  const id = match.params.id
  useEffect( () => {
    getItemById(setItem, id)
  }, [id])

  const buyButton =
    <Button 
      size="small" 
      color="primary" 
      variant="contained" 
      onClick={ () => { 
        onAddToCart({ ...item, qty });
        setButton('viewCartButton')
      }}
    >
    Agregar al carrito
    </Button>;

  const viewCartButton =
    <Button 
      size="small" 
      color="primary" 
      variant="contained" 
      onClick={(e) => renderCart()}
    >
    Ver carrito
    </Button>;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={thumbnail} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia style={{ height: "150px" }} image={image} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="subtitle2" gutterBottom>
          STOCK {stock}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          PRICE {price}
        </Typography>
      </CardContent>
      <ItemCount item={item} setQty={setQty}/>
      {
        qty > 0 && button === 'buyButton' && buyButton
      }
      {
        button === 'viewCartButton' && viewCartButton
      }
    </Card>
  );
}

export default ItemDetails;