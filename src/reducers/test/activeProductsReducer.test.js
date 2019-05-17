import activeProductsReducer from "../activeProductsReducer";

describe("active products  reducer", () => {
  it("should return the initial state", () => {
    expect(activeProductsReducer(undefined, {})).toEqual([]);
  });
  it("should handle CLICK_ON_PRODUCT push an id in array if it is not already oin state", () => {
    expect(
      activeProductsReducer([], {
        type: "CLICK_ON_PRODUCT",
        id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9"
      })
    ).toEqual(["faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9"]);
  });
  it("should handle CLICK_ON_PRODUCT pop an id form array if it is already in state", () => {
    expect(
      activeProductsReducer(
        [
          "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
          "faeedf8a-bf7d-11e5-a0f9-02fada0dddsa"
        ],
        {
          type: "CLICK_ON_PRODUCT",
          id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9"
        }
      )
    ).toEqual(["faeedf8a-bf7d-11e5-a0f9-02fada0dddsa"]);
  });
});
