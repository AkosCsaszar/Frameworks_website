import React from "react";
import { render } from "@testing-library/react";
import Root from "./root.component";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root />, div);
  ReactDOM.unmountComponentAtNode(div);
});