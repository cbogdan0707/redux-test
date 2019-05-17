describe("journey tests", function() {
  it("display all categories", function() {
    cy.visit("http://localhost:3600/");
    cy.get(".ui.grid.menu")
      .should("be.visible")
      .should("contain", "Drinks Cabinet")
      .children()
      .should("have.length", 25);
  });
  it("displays all products", function() {
    cy.visit("http://localhost:3600/");
    cy.get(".ui.list")
      .should("be.visible")
      .should("contain", "Borsao Macabeo")
      .children()
      .should("have.length", 385);
  });
  it("show the products for the selected category", function() {
    cy.visit("http://localhost:3600/");
    cy.get(".ui.list").should("be.visible");
    cy.get(".ui.grid.menu")
      .should("be.visible")
      .find(".item")
      .contains("Lunch")
      .click()
      .should("have.class", "active");
    cy.get(".ui.list")
      .should("not.contain", "Borsao Macabeo")
      .should("contain", "Singapore Style Rice Noodles")
      .children()
      .should("have.length", 2);
  });
  it("filters the products based on input search term", function() {
    cy.visit("http://localhost:3600/");
    cy.get(".ui.list").should("be.visible");
    cy.get("input").type("Borsao");
    cy.get(".ui.list")
      .should("be.visible")
      .should("contain", "Borsao Macabeo")
      .children()
      .should("have.length", 2);
  });
  it("filters the products based on input search term if it matches the description", function() {
    cy.visit("http://localhost:3600/");
    cy.get("input").type(
      "Intriguing notes of vanilla and chocolate make this fruity"
    );
    cy.get(".ui.list")
      .should("be.visible")
      .should("contain", "Rioja Reserva, Baron de Ebro")
      .children()
      .should("have.length", 1);
  });
  it("shows the description of a product when you click on it", function() {
    cy.visit("http://localhost:3600/");
    cy.get(".ui.list")
      .should("be.visible")
      .find(".item")
      .contains("Rioja Reserva, Baron de Ebro")
      .click()
      .should("have.class", "active")
      .should("contain", "vanilla and chocolate");
    cy.get(".ui.list")
      .find(".item")
      .contains("Sancerre Blanc")
      .click()
      .should("have.class", "active")
      .should("contain", "Milk, Wheat, Fish, Mustard");
    cy.get(".ui.list .item.active").should("have.length", 2);
    cy.get(".ui.list")
      .should("be.visible")
      .find(".item")
      .contains("Rioja Reserva, Baron de Ebro")
      .click()
      .should("not.have.class", "active")
      .should("not.contain", "vanilla and chocolate");
    cy.get(".ui.list .item.active").should("have.length", 1);
  });
});
