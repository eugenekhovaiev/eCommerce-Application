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
        <CardMedia component="img" height="140" image={props.image} alt={props.name['en-US']} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name['en-US']}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description ? props.description['en-US'] : 'Missing description'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Viev details
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
