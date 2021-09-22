import { Route, Switch } from "react-router-dom";

import { Home } from "./Home";
import { UserData } from "./UserData";
import { StudentsTable } from "./StudentsTable";
import { History } from "./History";
import { SeeMore } from "./SeeMore";
import { Feedback } from "./Feedback";
import { SignUp } from "./SignUp";
import { Notification } from "./Notification";
import { Evaluation } from "./Evaluation";

export function DashboardRoutes() {
  return (
    <Switch>
      <Route exact path="/dashboard" component={Home} />
      <Route exact path="/dashboard/students" component={StudentsTable} />
      <Route exact path="/dashboard/students/:id" component={History} />
      <Route exact path="/dashboard/students/:id/info" component={SeeMore} />
      <Route exact path="/dashboard/students/:id/evaluation" component={Evaluation} />
      <Route path="/dashboard/data" component={UserData} />
      <Route path="/dashboard/feedback/:id" component={Feedback} />
      <Route path="/dashboard/notification" component={Notification} />
      <Route path="/dashboard/signup" component={SignUp} />
    </Switch>
  );
}
