class ArchiveOrganization {

    
    get organizationsList() {
        return cy.get(".vs-c-list__organisation").last();
    }

    get oragnizationConfigurationButton() {
        return cy.get(".router-link-active").last();
    }

    get archiveOrganizationHeading() {
        return cy.get("vs-c-settings-section__header");
    }

    get archiveButton() {
        return cy.get(".vs-c-btn--spaced").eq(1);
    }

    get confirmButton() {
        return cy.get(".el-button").eq(1);
    }

    archiveOrganization() {
        this.organizationsList.click();
        this.oragnizationConfigurationButton.click();
        this.archiveButton.click();
        this.confirmButton.click();
    }
}

export const archiveOrganization = new ArchiveOrganization();