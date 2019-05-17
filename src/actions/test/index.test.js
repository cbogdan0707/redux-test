/**
 * @jest-environment node
 */

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../index";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import expect from "expect";
import categoriesMock from "../../mocks/categoriesMock";
import productsMock from "../../mocks/productsMock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe("async actions", () => {
  afterAll(() => {
    mock.restore();
  });

  it("creates FETCH_CATEGORIES_SUCCESS when fetching categories has been done", () => {
    mock
      .onGet("https://api.gousto.co.uk/products/v2.0/categories")
      .reply(200, categoriesMock);

    const expectedActions = [
      {
        type: "FETCH_CATEGORIES",
        payload: [
          {
            id: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9",
            title: "Drinks Cabinet"
          },
          {
            id: "529ea59e-bf7e-11e5-840e-02fada0dd3b9",
            title: "Kitchenware"
          },
          {
            id: "fec10d0e-bf7d-11e5-90a9-02fada0dd3b9",
            title: "Desserts"
          }
        ]
      }
    ];

    const store = mockStore({ categories: [] });

    return store.dispatch(actions.fetchCategories()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates FETCH_PRODUCTS_SUCCESS when fetching categories has been done", () => {
    mock
      .onGet(
        "https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&image_sizes[]=365"
      )
      .reply(200, productsMock);

    const expectedActions = [
      {
        type: "FETCH_PRODUCTS",
        payload: [
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
        ]
      }
    ];

    const store = mockStore({ products: [] });

    return store.dispatch(actions.fetchProducts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("sync actions", () => {
  it("should create an action to filter products based on category", () => {
    const expectedAction = {
      type: "FILTER_PRODUCTS",
      filteredList: {
        filteredProducts: [
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
          }
        ],
        categoryId: "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9"
      }
    };

    expect(
      actions.filterProductByCategory(
        productsMock.data,
        "faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9"
      )
    ).toEqual(expectedAction);
  });

  it("should create an action to click on product", () => {
    const expectedAction = {
      type: "CLICK_ON_PRODUCT",
      id: "069f7f26-025b-11e7-81e2-0234acc3da5b"
    };
    expect(
      actions.onProductClick("069f7f26-025b-11e7-81e2-0234acc3da5b")
    ).toEqual(expectedAction);
  });

  it("should create an action on input change that returns a list of products that contain the input value in the title", () => {
    const expectedAction = {
      type: "INPUT_FILTER_PRODUCTS",
      inputFilteredProducts: [
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
        }
      ],
      inputValue: "Borsao"
    };
    expect(
      actions.onInputChange({ target: { value: "Borsao" } }, productsMock.data)
    ).toEqual(expectedAction);
  });

  it("should create an action on input change that returns a list of products that contain the input value in the description", () => {
    const expectedAction = {
      type: "INPUT_FILTER_PRODUCTS",
      inputFilteredProducts: [
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
        }
      ],
      inputValue: "wine made from the indigenous"
    };
    expect(
      actions.onInputChange(
        { target: { value: "wine made from the indigenous" } },
        productsMock.data
      )
    ).toEqual(expectedAction);
  });
});
