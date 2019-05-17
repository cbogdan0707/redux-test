import productsReducer from "../productsReducer";
import productsMock from "../../mocks/productsMock";

describe("products reducer", () => {
  it("should return the initial state", () => {
    expect(productsReducer(undefined, {})).toEqual([]);
  });
  it("should handle FETCH_PRODUCTS", () => {
    expect(
      productsReducer([], {
        type: "FETCH_PRODUCTS",
        payload: productsMock.data
      })
    ).toEqual([
      {
        id: "0009468c-33e9-11e7-b485-02859a19531d",
        title: "Borsao Macabeo",
        description:
          "A flavoursome Summer wine made from the indigenous Macabeo grape in northern Spain. A balanced, modern white with flavours of ripe peach, zesty lemon and nutty undertones, it leaves the palate with a clean and fruity finish.",
        categories: [
          {
            id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
            title: "Drinks Cabinet"
          },
          {
            id: "785741fc-3854-11e6-87a5-06f9522b85fb",
            title: "Large Alcohol"
          }
        ]
      },
      {
        id: "0009468c-33e9-11e7-b485-02859a195323",
        title: "Domaine de L'Olibet 'Les Pujols' Cinsault Rosé",
        description:
          "A little gem from Saint Georges d’Orques in the south of France. Delicate, sweet spice aromas lead on to a palate of abundant ripe fruit, lifted by a natural zing and finishing with texture and richness. Full of character. 11.5% ABV [France]",
        categories: [
          {
            id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
            title: "Drinks Cabinet"
          },
          {
            id: "785741fc-3854-11e6-87a5-06f9522b85fb",
            title: "Large Alcohol"
          }
        ]
      },
      {
        id: "0009468c-33e9-11e7-b485-02859a1953aa",
        title: "Choc on Choc Make Your Own Egg Kit",
        description:
          "It doesn't get more egg-cellent than this make your own chocolate egg kit. Allowing kids to mould and decorate their very own Easter egg with their favourite sweets. Arriving with a paper chef's hat, nothing will be more special than seeing your little ones turn into mini chocolatiers for the day!",
        categories: [
          {
            id: "fec10d0e-bf7d-11e5-90a9-02fada0dd3b9",
            title: "Desserts"
          },
          {
            id: "830f0a62-3854-11e6-8999-06f9522b85fb",
            title: "Large BakedIn"
          }
        ]
      }
    ]);
  });
});
