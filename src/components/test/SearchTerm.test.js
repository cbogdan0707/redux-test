import React from "react";
import renderer from "react-test-renderer";

import { SearchTerm } from "../SearchTerm";

describe("Products snapshot test", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SearchTerm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
