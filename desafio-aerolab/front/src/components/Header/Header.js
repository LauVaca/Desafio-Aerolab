import React from 'react';
import aero from '../../icons/aero.png';
import Button from '@material-ui/core/Button';
import { ReactComponent as Coin } from '../../icons/coin.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Header(props) {
  if (!props.profile) {
    return <div className="progressBar"></div>;
  }
  return (
    <div className="header">
      <div className="nav">
        <div className="contNav">
          <Link to="/">
            <img alt="Aerolab" src={aero} className="img" />
          </Link>
        </div>

        <div className="itemsbar">
          <Link
            to={{
              pathname: 'perfilusuario',
            }}
            className="link"
          >
            <p>{props.profile.name}</p>
          </Link>
          <Button
            variant="contained"
            endIcon={<SvgIcon component={Coin} viewBox="0 0 30 30" />}
            className="btnPuntos"
          >
            {props.profile.points}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
