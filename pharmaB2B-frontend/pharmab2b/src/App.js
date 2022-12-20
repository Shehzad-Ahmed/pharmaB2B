import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsList from './screens/products-list';
import ProductDetails from './screens/products-detail';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container site-container">
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<ProductsList />}></Route>
              <Route path="product/:id" element={<ProductDetails />}></Route>
            </Routes>
          </Container>
        </main>
        <footer className="text-center ">All rights Reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
