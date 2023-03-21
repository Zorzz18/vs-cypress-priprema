class AddOrganization {

    get addNewOrganization() {
        return cy.get(".vs-c-my-organization--add-new");
    }

    get nameInput() {
        return cy.get("input")
    }

    get newOrganizationModal() {
        return cy.get(".vs-c-modal");
    }

    get nextButton() {
        return this.newOrganizationModal.find("button").last();
    }

    get uploadLogo() {
        return cy.get(".el-upload-dragger")
    }

    get createButton() {
        return this.newOrganizationModal.find("button").last();
    }

    get boardsWindow() {
        return cy.get(".vs-c-modal");
    }
    
      get boardsExitButton() {
        return this.boardsWindow.find("button").first();
    }

    create(name) {
        this.addNewOrganization.click(),
        this.nameInput.type(name),
        this.nextButton.click(),
        this.createButton.click()
        this.boardsExitButton.click();
    }
}

export const addOrganization = new AddOrganization();