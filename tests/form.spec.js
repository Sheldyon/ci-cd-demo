const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('UI тесты веб-формы', () => {
  
  test('заголовок страницы содержит "CI/CD Demo"', async ({ page }) => {
    await page.goto(`file://${path.resolve('index.html')}`);
    await expect(page).toHaveTitle(/CI\/CD Demo/);
  });

  test('отправка формы показывает сообщение об успехе', async ({ page }) => {
    await page.goto(`file://${path.resolve('index.html')}`);
    await page.click('#submitBtn');
    const message = await page.textContent('#message');
    expect(message).toContain('Спасибо, форма отправлена!');
  });

  test('поле имени существует и отображается', async ({ page }) => {
    await page.goto(`file://${path.resolve('index.html')}`);
    const nameField = await page.locator('#name');
    await expect(nameField).toBeVisible();
  });

  test('поле email существует и отображается', async ({ page }) => {
    await page.goto(`file://${path.resolve('index.html')}`);
    const emailField = await page.locator('#email');
    await expect(emailField).toBeVisible();
  });

  test('кнопка отправки существует и содержит текст', async ({ page }) => {
    await page.goto(`file://${path.resolve('index.html')}`);
    const submitBtn = await page.locator('#submitBtn');
    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toContainText('Отправить');
  });
});