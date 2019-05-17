import React from "react";
import renderer from "react-test-renderer";

import { Products } from "../Products";
import productsMock from "../../mocks/productsMock";

describe("Products snapshot test", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Products productsByCategory={productsMock.data} activeProducts="" />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
