import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Forms from "./pages/Forms";
import StudentPanel from "./pages/StudentPanel";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/forms" component={Forms} />
        <Route path="/studentPanel" component={StudentPanel} />
      </Switch>
    </BrowserRouter>
  );
}