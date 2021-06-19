import { useStyles } from "./style";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Rating from '../Rating'
export const Product = ({product}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea >
      <Link to={`/products/${product._id}`}>
      <CardMedia
          style={{ height: "250px", backgroundSize: "contain" }}
          className={classes.media}
          image={product.image}
        //   title={product.name}
        />
      </Link>
       
      </CardActionArea>

      <CardContent>
        <Typography
          className={classes.category}
          component={Link}
          to={`/category/${product.category._id}`}
        >
          {product.category.name}
        </Typography>
        <Typography
          className={classes.name}
          variant="h5"
          component={Link}
          to={`/product/${product._id}`}
        >
          {product.name}
        </Typography>
        <Typography className={classes.price}>${product.price}</Typography>
        <div className={classes.reviews}>
          <Rating value={product.rating} readOnly />
          <Typography>({product.reviews} Reviews)</Typography>
        </div>
      </CardContent>

      <CardActions className={classes.actions}>
        <Button
          size="small"
          color="primary"
        //   onClick={() => push(`/product/${props._id}`)}
        >
          View
        </Button>
        <Button
          size="small"
          color="secondary"
        //   endIcon={
        //     loading ? <CircularProgress size={20} color="secondary" /> : null
        //   }
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};


export default Product