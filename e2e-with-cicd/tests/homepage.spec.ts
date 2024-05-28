import { test, expect } from '@playwright/test';

test('home page testing', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('img', { name: 'Next.js Logo' })).toBeVisible();
    await expect(page.getByText('Docs ->Find in-depth information about Next.js features and API.Learn ->Learn')).toBeVisible();
});