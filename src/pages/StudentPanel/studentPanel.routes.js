import { Route, Switch } from "react-router-dom";

import { Home } from "./Home";
import { UserData } from "./UserData";
import { Notification } from "./Notification";
import { Feedback } from "./Feedback";

export function StudentPanelRoutes() {
  return (
    <Switch>
      <Route exact path="/studentPanel" component={Home} />
      <Route exact path="/studentPanel/data" component={UserData} />
      <Route path="/studentPanel/notification" component={Notification} />
      <Route path="/studentPanel/feedback" component={Feedback} />
    </Switch>
  );
}
