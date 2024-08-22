const page = require('../../page');

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`https://cnt-e45466ea-203e-465d-b41f-f042ab74dbe6.containerhub.tripleten-services.com`);
        
        const fromField = await $(page.fromField);
        await fromField.setValue('East 2nd Street, 601');
        
        const toField = await $(page.toField);
        await toField.setValue('1300 1st St');
        
        const callATaxiButton = await $(page.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
        
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        
        const phoneNumberModal = await $(page.phoneNumberModal);  // Corrected typo here
        await phoneNumberModal.waitForDisplayed();  // Ensure the modal is displayed
        expect(phoneNumberModal).toBeExisting();
    });
});
