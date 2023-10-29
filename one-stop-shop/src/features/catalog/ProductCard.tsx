import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import { Product } from "../../app/models/product";

interface Props {
  product: Product; // it is not a list so we didn't like Product[]
}

export default function ProductCard({ product }: Props) {
  return (
    <Card className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title={product.name}
      />
      <CardHeader>
        avatar={<Avatar>{product.name.charAt(0).toUpperCase()}</Avatar>}
        title={product.name}
      </CardHeader>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price.toFixed(2)}$
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <Button size="small">Buy now</Button>
        <Button size="small">Add to card </Button>
      </CardActions>
    </Card>
  );
}
