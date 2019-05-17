import categoriesReducer from "../categoriesReducer";
import categoriesMock from "../../mocks/categoriesMock";

describe("categories reducer", () => {
  it("should return the initial state", () => {
    expect(categoriesReducer(undefined, {})).toEqual([]);
  });
  it("should handle FETCH_CATEGORIES", () => {
    expect(
      categoriesReducer([], {
        type: "FETCH_CATEGORIES",
        payload: categoriesMock.data
      })
    ).toEqual([
      { id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9", title: "Drinks Cabinet" },
      { id: "529ea59e-bf7e-11e5-840e-02fada0dd3b9", title: "Kitchenware" },
      { id: "fec10d0e-bf7d-11e5-90a9-02fada0dd3b9", title: "Desserts" }
    ]);
  });
});
