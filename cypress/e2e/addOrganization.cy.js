import { addOrg, addOrganization } from "../page_objects/addOrganization";
import { loginPage } from "../page_objects/loginPage"

let loginData = {
    email: "vezbatest123@gmail.com",
    password: "12345vezba"
};

describe("Add Organizations tests", () => {
    before("Log into the App", () => {
    cy.visit("/login")
    loginPage.loginWithValidData(loginData.email, loginData.password)
    cy.url().should("not.include", "/login")
    });

    it("Add new Organization", () => {
        cy.intercept({
            method: "POST",
            url: `${Cypress.env("apiUrl")}/v2/organizations`,
        }).as("successfullAddNewOrg");

        cy.visit("/my-organizations")
        addOrganization.create("Proba1");
        cy.url().should("include", "/organizations");

        cy.wait("@successfullAddNewOrg").then((interception) => {
            expect(interception.response.statusCode).eq(201);
            expect(interception.response.statusMessage).eq("Created");
        });
    });
});