import React from 'react';
import aero from '../../icons/aero.png';
import electro from '../../icons/headerx2.png';
import Button from '@material-ui/core/Button';
import { ReactComponent as Coin } from '../../icons/coin.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import PerfilUsuario from './Perfil';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="nav">
        <img alt="Aerolab" src={aero} className="img" />
        <div className="itemsbar">
          <Link to="/perfil">
            <p>Usuario</p>
          </Link>
          <Button
            variant="contained"
            endIcon={<SvgIcon component={Coin} viewBox="0 0 30 30" />}
            className="btnPuntos"
          >
            2500
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
