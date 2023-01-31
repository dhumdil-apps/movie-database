import { test, expect } from '@playwright/test';

const baseUrl = 'http://localhost:5173';

test('has home page', async ({ page }) => {
  await page.goto(baseUrl);
  await expect(page.getByTestId('header')).toBeVisible();
  await expect(page.getByTestId('footer')).toBeVisible();
  await expect(page.getByTestId('home')).toBeVisible();
  await expect(page.getByTestId('favorites-link')).toBeVisible();
  await expect(page).toHaveTitle(/Movie Database/);
});

test('has favorites page', async ({ page }) => {
  await page.goto(baseUrl);
  await page.getByTestId('favorites-link').click();
  await expect(page.getByTestId('header')).toBeVisible();
  await expect(page.getByTestId('footer')).toBeVisible();
  await expect(page.getByTestId('home-link')).toBeVisible();
  await expect(page).toHaveTitle(/Favorite Movies/);
});

test('has movie details page', async ({ page }) => {
  await page.goto(baseUrl + '/movie/test');
  await expect(page.getByTestId('header')).toBeVisible();
  await expect(page.getByTestId('footer')).toBeVisible();
  await expect(page.getByTestId('home-link')).toBeVisible();
  await expect(page.getByTestId('favorites-link')).toBeVisible();
  await expect(page).toHaveTitle(/Movie Details/);
});

test('has 404 page', async ({ page }) => {
  await page.goto(baseUrl + '/404');
  await expect(page.getByTestId('header')).toBeVisible();
  await expect(page.getByTestId('footer')).toBeVisible();
  await expect(page.getByTestId('404')).toBeVisible();
  await expect(page).toHaveTitle(/Page not found/);
});
