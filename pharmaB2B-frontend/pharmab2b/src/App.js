import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsList from './screens/products-list';
import ProductDetails from './screens/products-detail';
import { Container } from 'react-bootstrap';
import ShoppingCart from './screens/shopping-cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container site-container">
        <header>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
          <Navbar></Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<ProductsList />}></Route>
              <Route path="product/:id" element={<ProductDetails />}></Route>
              <Route path="cart/" element={<ShoppingCart />}></Route>
            </Routes>
          </Container>
        </main>
        <footer className="text-center ">All rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
