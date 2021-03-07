import React from 'react';
import Header from '../Header/Header';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ProductList from '../Card/ProductList';

function Home() {
  return (
    <div>
      <Header />
      <div className="containerSort">
        <p>Sort by: </p>
        <div className="grupoB">
          <ButtonGroup
            variant="text"
            aria-label="text primary button group"
          >
            <Button className="btnSort">Most recent</Button>
            <Button className="btnSort">Lowest price</Button>
            <Button className="btnSort">Highest price</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="containerCards">
        <ProductList />
      </div>
      {/* <div>
        <Link to="/list">
          <Button>List</Button>
        </Link>
        <Link to="/product">
          <Button>Product</Button>
        </Link> 
      </div>*/}
    </div>
  );
}

export default Home;
