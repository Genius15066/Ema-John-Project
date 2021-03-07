import './App.css';
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory'
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail';



function App() {
  return (
    <>
      <Router>
      <Header></Header>

        <Switch>
          <Route exact path="/">
          <Shop/>
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/manage">
            <Inventory/>
          </Route>

          <Route path="/:category/:key">
             <ProductDetail/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>

      </Router>
      

    </>
  );
}

export default App;
