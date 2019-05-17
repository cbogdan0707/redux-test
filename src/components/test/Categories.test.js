import React from "react";
import renderer from "react-test-renderer";

import { Categories } from "../Categories";
import categoriesMock from "../../mocks/categoriesMock";

describe("Categories snapshot test", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Categories
          categories={categoriesMock.data}
          activeCategory={categoriesMock.data[2].id}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
