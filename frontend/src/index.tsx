import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { Application } from "./Application";

ReactDOM.render(
  <Application />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
