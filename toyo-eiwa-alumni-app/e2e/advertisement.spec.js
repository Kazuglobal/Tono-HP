import { test, expect } from '@playwright/test';

test.describe('広告ページ', () => {
  test('カルーセルで広告を切り替えられる', async ({ page }) => {
    await page.goto('/');

    const shortcutButton = page.getByRole('button', { name: '広告ページ' });
    await shortcutButton.scrollIntoViewIfNeeded();
    await shortcutButton.click();

    await expect(page.getByRole('heading', { level: 1, name: '広告ギャラリー' })).toBeVisible();

    const slides = page.locator('[data-testid="ad-slide"]');
    await expect(slides).toHaveCount(4);

    const activeTitle = page.locator('[data-testid="ad-slide"][data-active="true"] h2');
    const firstTitle = (await activeTitle.textContent())?.trim();

    await page.getByTestId('carousel-next').click();

    if (firstTitle) {
      await expect(activeTitle).not.toHaveText(firstTitle);
      await page.getByTestId('ad-indicator').first().click();
      await expect(activeTitle).toHaveText(firstTitle);
    } else {
      await page.getByTestId('ad-indicator').first().click();
    }

    await expect(page.locator('section[aria-live="polite"] h3')).toBeVisible();
  });
});
