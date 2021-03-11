import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import aero from '../../icons/aero.png';
import Button from '@material-ui/core/Button';
import { ReactComponent as Coin } from '../../icons/coin.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQwMWNiNTdlNzE4NzAwMjBlMzhmM2UiLCJpYXQiOjE2MTQ4MTQzODl9.y01QnX7nVE9j3ig0I8sujMsLriEJ7A_RV-9pJlmFnxg';

function Header(props) {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const fectchData = async () => {
      try {
        const { data } = await axios.get(
          `https://coding-challenge-api.aerolab.co/user/me?token=${TOKEN}`,
        );
        setProfile(data);
      } catch (err) {
        console.log(err);
      }

      console.log(profile);
    };

    fectchData();
  }, []);

  if (!profile) {
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
          <Link to="/perfilusuario" className="link">
            <p>{profile.name}</p>
          </Link>
          <Button
            variant="contained"
            endIcon={<SvgIcon component={Coin} viewBox="0 0 30 30" />}
            className="btnPuntos"
          >
            {profile.points}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
