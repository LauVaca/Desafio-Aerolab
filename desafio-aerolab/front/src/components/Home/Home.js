import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ProductList from '../Card/ProductList';
import Categoria from '../Header/Categoria';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQwMWNiNTdlNzE4NzAwMjBlMzhmM2UiLCJpYXQiOjE2MTQ4MTQzODl9.y01QnX7nVE9j3ig0I8sujMsLriEJ7A_RV-9pJlmFnxg';

function Home(props) {
  const [respuesta, setRespuesta] = useState(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();
  const [inferior, setInferior] = useState(0);
  const [superior, setSuperior] = useState(15);
  const [profile, setProfile] = useState('');
  const [cards, setCards] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
    setSuperior(value * 16 - 1);
    setInferior((value - 1) * 16);
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
  }, []);

  if (!profile) {
    return (
      <div className="progressBar">
        <CircularProgress className="colorProgress" />
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div>
      <Header
        profile={profile}
        setRespuesta={setRespuesta}
        respuesta={respuesta}
      />
      <Categoria />
      <div className="containerFiltros">
        <div>
          {count !== '' ? (
            <Pagination
              page={page}
              count={count}
              onChange={handleChangePage}
            />
          ) : (
            ''
          )}
        </div>
        <div className="sort">
          <p>Sort by: </p>
          <div className="grupoB">
            <ButtonGroup
              variant="text"
              aria-label="text primary button group"
            >
              <Button
                className="btnSort"
                onClick={() => {
                  let newSortedList = [...cards].sort((b, a) =>
                    a._id > b._id ? 1 : a._id < b._id ? -1 : 0,
                  );
                  setCards(newSortedList);
                }}
              >
                Most recent
              </Button>
              <Button
                className="btnSort"
                onClick={() => {
                  let newSortedList = [...cards].sort((a, b) =>
                    a.cost > b.cost ? 1 : a.cost < b.cost ? -1 : 0,
                  );
                  setCards(newSortedList);
                }}
              >
                Lowest price
              </Button>
              <Button
                className="btnSort"
                onClick={() => {
                  let newSortedList = [...cards].sort((b, a) =>
                    a.cost > b.cost ? 1 : a.cost < b.cost ? -1 : 0,
                  );
                  setCards(newSortedList);
                }}
              >
                Highest price
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      <div className="containerCards">
        <ProductList
          cards={cards}
          setCards={setCards}
          count={count}
          setCount={setCount}
          inferior={inferior}
          superior={superior}
          setProfile={setProfile}
          respuesta={respuesta}
          setRespuesta={setRespuesta}
          profile={profile}
          setOpen={setOpen}
        />
      </div>
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            variant="filled"
            severity="error"
            onClose={handleClose}
          >
            You don't have enough points for this product.
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default Home;
