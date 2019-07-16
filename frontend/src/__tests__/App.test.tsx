/// <reference types="jest" />

import * as React from "react";
import * as renderer from "react-test-renderer";
import { Application } from "../Application";

it("Renders correctly", () => {
  const tree = renderer.create(<Application />).toJSON();

  expect(tree).toMatchSnapshot();
});