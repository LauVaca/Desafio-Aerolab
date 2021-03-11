import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../Header/Header';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQwMWNiNTdlNzE4NzAwMjBlMzhmM2UiLCJpYXQiOjE2MTQ4MTQzODl9.y01QnX7nVE9j3ig0I8sujMsLriEJ7A_RV-9pJlmFnxg';

function PerfilUsuario(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    point: '',
    name: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

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
      <div>
        <div className="containerPerfil">
          <div className="containerDatos">
            <p className="tituloPerfil">Información personal</p>
            <p className="subtitulo">Nombre y Apellido</p>
            <p className="dato">{profile.name}</p>
          </div>
        </div>
        <div className="containerPerfil">
          <div className="containerDatos">
            <p className="tituloPerfil">Mis puntos</p>
            <p className="subtitulo">Cantidad de puntos</p>
            <p className="dato">{profile.points} puntos</p>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="point">Sumar puntos</InputLabel>
              <Select
                native
                value={state.point}
                onChange={handleChange}
                inputProps={{
                  name: 'point',
                  id: 'point-id',
                }}
              >
                <option value={1000}>1000</option>
                <option value={5000}>5000</option>
                <option value={7500}>7500</option>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              style={{
                backgroundColor: 'orangered',
                color: 'white',
                boxShadow: 'none',
                marginTop: 20,
                marginLeft: 10,
              }}
            >
              Sumar
            </Button>
          </div>
        </div>
        <div className="containerPerfil">
          <div className="containerDatos">
            <p className="tituloPerfil">Historial de puntos</p>
            {profile.redeemHistory == '' ? (
              <p className="dato">Aún no se canjearon puntos</p>
            ) : (
              <p className="dato">{profile.redeemHistory}</p>
            )}
          </div>
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

export default PerfilUsuario;
