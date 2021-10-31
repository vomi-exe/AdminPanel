import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./Pages/Home";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./Pages/UserList";
import User from "./Pages/User";
import Newuser from "./Pages/NewUser";
import Productlist from "./Pages/ProductList";
import Product from "./Pages/Product";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/users" exact>
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newuser">
            <Newuser />
          </Route>
          <Route path="/products">
            <Productlist />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
