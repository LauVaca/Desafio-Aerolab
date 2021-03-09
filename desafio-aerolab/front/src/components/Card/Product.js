import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ReactComponent as Coin } from '../../icons/coin.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import Divider from '@material-ui/core/Divider';

function Product(props) {
  return (
    <div className="card">
      <div className="puntos"></div>
      <div className="cont">
        <div className="costo">
          {props.cost}
          <SvgIcon
            style={{ marginLeft: 10 }}
            component={Coin}
            viewBox="0 0 30 30"
          />
        </div>
        <Button
          disableElevation
          variant="contained"
          className="btnReedem"
        >
          Reedem now
        </Button>
      </div>
      <img className="imgCard" src={props.url} alt={props.name} />
      <Divider className="divider" />
      <Typography gutterBottom className="textCard-cat">
        {props.category}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className="textCard-name"
      >
        {props.name}
      </Typography>
    </div>

    /* <Card className="card">
        <CardActionArea>
          <CardMedia
            className="imgCard"
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
          <CardActions className="puntos">
            <Button size="small">{props.cost}</Button>
          </CardActions>
        </CardActionArea>
      </Card> */
  );
}
export default Product;
