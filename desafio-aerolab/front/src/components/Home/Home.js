import React from 'react';
import Header from '../Header/Header';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ProductList from '../Card/ProductList';
import TablePagination from '@material-ui/core/TablePagination';
import Categoria from '../Header/Categoria';

function Home() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(16);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <Header />
      <Categoria />
      <div className="containerFiltros">
        <div>
          <TablePagination
            component="div"
            count={32}
            page={page}
            rowsPerPageOptions={16}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
          />
        </div>
        <div className="sort">
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
