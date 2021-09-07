import { Route, Switch } from "react-router-dom";

import { Home } from "./Home";
import { UserData } from "./UserData";
import { SeeMore } from "./SeeMore";

export function StudentPanelRoutes() {
  return (
    <Switch>
      <Route exact path="/studentPanel" component={Home} />
      <Route exact path="/studentPanel/data" component={UserData} />
      <Route path="/studentPanel/students/:formsId" component={SeeMore} />
    </Switch>
  );
}
