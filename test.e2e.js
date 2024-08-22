describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        const flashMessage = await $('#flash');
        await flashMessage.waitForDisplayed({ timeout: 10000 });

        // Using basic WebDriverIO assertions
        const flashText = await flashMessage.getText();
        if (!flashText.includes('You logged into a secure area!')) {
            throw new Error('Flash message does not contain expected text');
        }
    });
});
