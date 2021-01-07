import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { routes } from "@ui/routes";
import { store, persistor } from "@application/config/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "@public/styles/styles.css";

const App = (): JSX.Element => (
  <Fragment>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            {routes.map(route => (
              <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  </Fragment>
);

export default App;
