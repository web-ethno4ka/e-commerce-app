import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductComponent from './containers/ProductComponent';
import ProductsList from './containers/ProductsList';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductsList />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route>Page not found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
