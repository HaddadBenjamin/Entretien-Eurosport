describe("Navigation", () => {
  it("Should navigate to the player page", () => {
    cy.visit("http://localhost:3000/");
    cy.wait(1000);
    cy.get('[data-testid="Player-Navigation-Link"]').first().click();
    cy.url().should("include", "/players/player-1");
  });

  it("Should navigate to the home page", () => {
    cy.visit("http://localhost:3000/players/player-1/");
    cy.wait(1000);
    cy.get('[data-testid="Go-Back-To-Home-Button"]').first().click();
    cy.url().should("include", "/");
  });
});
