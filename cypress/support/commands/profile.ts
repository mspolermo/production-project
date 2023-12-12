export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asdd' },
        body: {
            id: '4',
            first: 'Test',
            lastname: 'User',
            age: 30,
            city: 'Полевской',
            username: 'testuser',
            avatar: 'https://cdnstatic.rg.ru/crop1300x732/uploads/images/125/44/18/11111111.jpg',
            currency: 'USD',
            country: 'Ukraine',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
