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

  const [profile, setProfile] = useState(null);
  const [respuesta, setRespuesta] = useState(null);

  const handleSubmit1 = (event, value) => {
    event.preventDefault();
    const puntos = { amount: 1000 };
    const postData = async () => {
      try {
        const response = await axios.post(
          `https://coding-challenge-api.aerolab.co/user/points?token=${TOKEN}`,
          puntos,
        );
        setRespuesta(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    postData();
  };

  const handleSubmit5 = (event, value) => {
    event.preventDefault();

    const puntos = { amount: 5000 };

    const postData = async () => {
      try {
        const response = await axios.post(
          `https://coding-challenge-api.aerolab.co/user/points?token=${TOKEN}`,
          puntos,
        );
        setRespuesta(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    postData();
  };

  const handleSubmit75 = (event, value) => {
    event.preventDefault();

    const puntos = { amount: 7500 };

    const postData = async () => {
      try {
        const response = await axios.post(
          `https://coding-challenge-api.aerolab.co/user/points?token=${TOKEN}`,
          puntos,
        );
        setRespuesta(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    postData();
  };

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
  }, [respuesta]);

  if (!profile) {
    return (
      <div className="progressBar">
        <CircularProgress color="secondary" />
      </div>
    );
  }
  return (
    <div>
      <Header profile={profile} setRespuesta={setRespuesta} />
      <div>
        <div className="containerPerfil">
          <div className="containerDatos">
            <p className="tituloPerfil">Personal information</p>
            <p className="subtitulo">Name and Surname</p>
            <p className="dato">{profile.name}</p>
          </div>
        </div>
        <div className="containerPerfil">
          <div className="containerDatos">
            <p className="tituloPerfil">My points</p>
            <p className="subtitulo">Current amount of points</p>
            <p className="dato">{profile.points} points</p>
            <Button
              variant="contained"
              onClick={handleSubmit1}
              className="btnAddPoints"
            >
              +1000 points
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit5}
              className="btnAddPoints"
            >
              +5000 points
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit75}
              className="btnAddPoints"
            >
              +7500 points
            </Button>
          </div>
        </div>
        <div className="containerPerfil">
          <div className="containerDatos">
            <p className="tituloPerfil">History of redeemed points</p>
            {profile.redeemHistory == '' ? (
              <p className="dato">
                You don't have redeemed points yet
              </p>
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
