import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Forms from "./pages/Forms";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/forms" component={Forms} />
      </Switch>
    </BrowserRouter>
  );
}