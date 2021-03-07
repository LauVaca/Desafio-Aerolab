import React from 'react';
import aero from '../../icons/aero.png';
import electro from '../../icons/headerx2.png';
import Button from '@material-ui/core/Button';
import { ReactComponent as Coin } from '../../icons/coin.svg';
import SvgIcon from '@material-ui/core/SvgIcon';

function Header() {
  return (
    <div className="header">
      <div className="nav">
        <img alt="Aerolab" src={aero} className="img" />
        <div className="itemsbar">
          <p>Usuario</p>
          <Button
            variant="contained"
            endIcon={<SvgIcon component={Coin} viewBox="0 0 30 30" />}
            className="btnPuntos"
          >
            2500
          </Button>
        </div>
      </div>
      {/*    <div className="image">
        <div className="textoimagen">Electronics</div>
        <img alt="Electronics" src={electro} className="imgElectro" />
      </div> */}
      <div className="image">
        <div className="textoimagen">Electronics</div>
        <img alt="Electronics" src={electro} className="imgElectro" />
      </div>
    </div>
  );
}

export default Header;
