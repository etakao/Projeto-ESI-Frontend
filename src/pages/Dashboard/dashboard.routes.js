import { Route, Switch } from "react-router-dom";

import { Home } from "./Home";
import { StudentsTable } from "./StudentsTable";
import { SeeMore } from "./SeeMore";
import { SignUp } from "./SignUp";
import { History } from "./History";

export function DashboardRoutes() {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Home} />
      <Route exact path="/dashboard/students" component={StudentsTable} />
      <Route exact path="/dashboard/students/:studentUspNumber" component={History} />
      <Route path="/dashboard/students/:studentUspNumber/info" component={SeeMore} />
      <Route path="/dashboard/signup" component={SignUp} />
    </Switch>
  );
}
