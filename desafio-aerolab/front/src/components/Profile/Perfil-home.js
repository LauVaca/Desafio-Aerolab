import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../Header/Header';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQwMWNiNTdlNzE4NzAwMjBlMzhmM2UiLCJpYXQiOjE2MTQ4MTQzODl9.y01QnX7nVE9j3ig0I8sujMsLriEJ7A_RV-9pJlmFnxg';

function PerfilHome(props) {
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
    return (
      <div className="progressBar">
        <CircularProgress color="secondary" />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="containerPerfil">
        <div className="containerDatos">
          <p className="tituloPerfil">Mi perfil</p>
          <List>
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Mi información personal" />
            </ListItem>
            <ListItem
              button
              onClick={() => (
                <Link to="/perfilusuario" className="link"></Link>
              )}
            >
              <ListItemIcon>
                <MonetizationOnIcon />
              </ListItemIcon>
              <ListItemText primary="Mis puntos" />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

// {
//   "_id": "60401cb57e71870020e38f3e",
//   "name": "John Kite",
//   "points": 4000,
//   "createDate": "2021-03-03T23:33:09.797Z",
//   "redeemHistory": [],
//   "__v": 0
// }

export default PerfilHome;
