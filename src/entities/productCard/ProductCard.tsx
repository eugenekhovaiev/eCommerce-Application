import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { ProductCardProps } from '../../shared/types';

function ProductCard(props: ProductCardProps): JSX.Element {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image ? props.image : 'src/shared/assets/image-placeholder.svg'}
          alt={props.name['en-US']}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name['en-US']}
          </Typography>
          <Typography
            className={`price ${props.priceDiscounted ? 'price_line-through' : ''}`}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.price ? `${(+props.price / 100).toFixed(2)}$` : 'Price is missing'}
          </Typography>
          {props.priceDiscounted && (
            <Typography className="price price_discounted" gutterBottom variant="h5" component="div">
              {(+props.priceDiscounted / 100).toFixed(2)}$
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary">
            {props.description ? props.description['en-US'] : 'Description for this product is missing!'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View details
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
