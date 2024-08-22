describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`https://cnt-e45466ea-203e-465d-b41f-f042ab74dbe6.containerhub.tripleten-services.com`)
        const fromField = await $('#from');
        await fromField.setValue('East 2nd Street, 601');
        const toField = await $('#to')
        await toField.setValue('1300 1st St')
        const callATaxiButton = await $('//button[contains(text(), "Call a taxi")]')
        // We are waiting when the button will be visiable
                await callATaxiButton.waitForDisplayed()
        await callATaxiButton.click()
        const phoneNumberButton = await $('//div[contains(text(), "Phone number")]')
        // We are waiting when the button will be visiable
        await phoneNumberButton.waitForDisplayed()
        await phoneNumberButton.click()
        const phoneNumberModal = await $(".modal")
        expect(phoneNumberModal).toBeExisting()
    })
})