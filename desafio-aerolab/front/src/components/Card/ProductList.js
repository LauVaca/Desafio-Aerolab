import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product.js';
import CircularProgress from '@material-ui/core/CircularProgress';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQwMWNiNTdlNzE4NzAwMjBlMzhmM2UiLCJpYXQiOjE2MTQ4MTQzODl9.y01QnX7nVE9j3ig0I8sujMsLriEJ7A_RV-9pJlmFnxg';

function ProductList(props) {
  const [cardsPage, setCardsPage] = useState([]);

  useEffect(() => {
    const fectchData = async () => {
      try {
        const { data } = await axios.get(
          `https://coding-challenge-api.aerolab.co/products?token=${TOKEN}`,
        );
        props.setCards(data);
        props.setCount(Math.ceil(props.cards.length / 16));
      } catch (err) {
        console.log(err);
      }
      console.log(props.cards);
    };
    fectchData();
  }, [props.count]);

  useEffect(() => {
    if (props.cards.length > 0) {
      setCardsPage(
        props.cards.slice(props.inferior, props.superior + 1),
      );
    }
  }, [props.cards, props.inferior]);

  if (props.cards.length < 0) {
    return (
      <div className="progressBar">
        <CircularProgress className="colorProgress" />
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="cardCont">
      {cardsPage.map((card) => {
        return (
          <Product
            id={card._id}
            url={card.img.url}
            name={card.name}
            category={card.category}
            cost={card.cost}
            setProfile={props.setProfile}
            setRespuesta={props.setRespuesta}
            profile={props.profile}
            respuesta={props.respuesta}
            setOpen={props.setOpen}
          />
        );
      })}
    </div>
  );
}
export default ProductList;
