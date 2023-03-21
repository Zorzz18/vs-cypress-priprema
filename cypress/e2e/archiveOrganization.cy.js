/// <refrence types="Cypress" />

import { addOrganization } from "../page_objects/addOrganization";
import { loginPage } from "../page_objects/loginPage"
import { archiveOrganization } from "../page_objects/archiveOrganization"

let loginData = {
    email: "vezbatest123@gmail.com",
    password: "12345vezba"
};

describe("Add Organizations tests", () => {
    before("Log into the App", () => {
    cy.visit("/login");
    loginPage.loginWithValidData(loginData.email, loginData.password);
    cy.url().should("not.include", "/login");
    });

    beforeEach("Create new Organization", () => {
    cy.visit("/my-organizations");
    addOrganization.create("Nova123");
    cy.url().should("include", "/organizations");
    })

    it("Archive Organization", () => {
        cy.visit("/my-organizations")
        archiveOrganization.archiveOrganization();

        archiveOrganization.archiveOrganizationHeading
        .should("be.visible")
        .and("have.text", "Archive Organization")
        .and("have.css", "color", "rgb(179, 179, 179)")
        .and("have.css", "background-color", "rgb(230, 230, 230)");

    })
});