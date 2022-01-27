import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Productslist from "./components/ProductsList.js";
import AddProduct from "./components/AddProducts.js";
import EditProducts from "./components/EditProducts.js";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container pt-4">
          <div className="row">
            <div className="col-md-6 col-sm-3">
              <Switch>
                <Route exact path="/">
                  <Productslist />
                </Route>
                <Route path="/add">
                  <AddProduct />
                </Route>
                <Route path="/edit/:id">
                  <EditProducts />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
