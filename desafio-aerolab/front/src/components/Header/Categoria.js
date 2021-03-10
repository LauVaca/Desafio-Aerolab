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

function Categoria() {
  return (
    <div className="image">
      <div className="textoimagen">Electronics</div>
      <img alt="Electronics" src={electro} className="imgElectro" />
    </div>
  );
}

export default Categoria;
