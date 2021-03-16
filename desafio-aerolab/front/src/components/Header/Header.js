import React from 'react';
import aero from '../../icons/aero.png';
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
          <Link to="profile" className="link">
            <p>{props.profile.name}</p>
          </Link>
          <div className="btnPuntos">
            {props.profile.points}
            <SvgIcon
              className="coinIcon"
              component={Coin}
              viewBox="0 0 30 30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
