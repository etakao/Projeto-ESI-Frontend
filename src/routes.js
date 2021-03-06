import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Forms from "./pages/Forms";

import Nonexistent from "./pages/Nonexistent";
import { SignIn } from "./pages/SignIn";
export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/forms" component={Forms} />
        <Route component={Nonexistent} />
      </Switch>
    </BrowserRouter>
  );
}