import { Route, Switch } from "react-router-dom";

import { Home } from "./Home";
import { StudentsTable } from "./StudentsTable";
import { SeeMore } from "./SeeMore";
import { Notifications } from "./Notifications";

export function DashboardRoutes() {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Home} />
      <Route exact path="/dashboard/students" component={StudentsTable} />
      <Route path="/dashboard/students/:studentRa" component={SeeMore} />
      <Route path="/dashboard/notifications" component={Notifications} />
    </Switch>
  );
}
