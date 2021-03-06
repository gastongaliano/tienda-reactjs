import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import { Avatar, IconButton, CardMedia} from "@material-ui/core";

function Item({item}) {
  const { thumbnail, title, subtitle, image, stock } = item;
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
        <Typography variant="subtitle2" gutterBottom>
          STOCK {stock}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Item;