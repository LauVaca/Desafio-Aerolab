import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    width: 260,
    marginBottom: 25,
    marginLeft: 5,
    marginRight: 5,
  },
  media: {
    height: 170,
  },
});

function Product(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.url}
          tittle={props.category}
          alt={props.name}
        />
        <Divider className="divider" />
        <CardContent>
          <Typography
            gutterBottom
            style={{ color: '#b2b2b2', fontSize: 14 }}
          >
            {props.category}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ color: '#707070' }}
          >
            {props.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{props.cost}</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
export default Product;
