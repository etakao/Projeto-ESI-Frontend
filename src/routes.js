import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard/panel" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}