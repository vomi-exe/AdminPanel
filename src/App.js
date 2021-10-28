import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./Pages/Home";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./Pages/UserList";

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
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
