import * as React from "react";
import "./App.css";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/customer/Create";
import EditCustomer from "./components/customer/Edit";

class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}> Home</Link>
            </li>

            <li>
              <Link to={"/create"}> Create Customer </Link>
            </li>
            <li>
              <a href="https://github.com/Werlott-071" target="_blank">
                View My GitHub Profile
              </a>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/create"} exact component={Create} />
          <Route path={"/edit/:id"} exact component={EditCustomer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
