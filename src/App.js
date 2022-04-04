import React from "react";
import { Route, Switch } from "react-router";
import LoginPage from "./features/auth/pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import protectedRoutes from "./routes/protected";
import "./App.css";
import RegistrationPage from "./features/auth/pages/RegistrationPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/registration" exact component={RegistrationPage} />
          {protectedRoutes.map((route, index) => (
            <ProtectedRoute
              key={index}
              path={route.path}
              exact
              component={route.component}
              title={route.title}
            ></ProtectedRoute>
          ))}
          <Route path="*" component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;
