import React, { useEffect } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ReactComponent as Coin } from '../../icons/coin.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQwMWNiNTdlNzE4NzAwMjBlMzhmM2UiLCJpYXQiOjE2MTQ4MTQzODl9.y01QnX7nVE9j3ig0I8sujMsLriEJ7A_RV-9pJlmFnxg';

function Product(props) {
  const handleRedeem = (event, value) => {
    event.preventDefault();

    const canje = { productId: props.id };

    const postRedeem = async () => {
      try {
        const response = await axios.post(
          `https://coding-challenge-api.aerolab.co/redeem?token=${TOKEN}`,
          canje,
        );
        props.setRespuesta(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (props.profile.points > props.cost) {
      postRedeem();
    } else {
      props.setOpen(true);
    }
  };

  useEffect(() => {
    const fectchData = async () => {
      try {
        const { data } = await axios.get(
          `https://coding-challenge-api.aerolab.co/user/me?token=${TOKEN}`,
        );
        props.setProfile(data);
      } catch (err) {
        console.log(err);
      }
      console.log(props.profile);
    };

    fectchData();
  }, [props.respuesta]);

  let resta = props.cost - props.profile.points;

  return (
    <div className="card hvr-grow-shadow">
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
          onClick={handleRedeem}
        >
          Reedem now
        </Button>
      </div>
      <div className="btn">
        {props.profile.points >= props.cost ? (
          <Fab size="small" className="btnPuntos">
            <LocalMallIcon />
          </Fab>
        ) : (
          <Button
            variant="contained"
            className="btnPuntosResta"
            endIcon={<SvgIcon component={Coin} viewBox="0 0 30 30" />}
          >
            You need {resta}
          </Button>
        )}
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
  );
}
export default Product;
