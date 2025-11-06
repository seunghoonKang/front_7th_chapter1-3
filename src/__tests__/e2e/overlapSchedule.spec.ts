import { test, expect } from '@playwright/test';

test('일정 중복 방지', async ({ page }) => {
  await page.goto('/');

  // 생성
  await page.getByRole('textbox', { name: '제목' }).fill('일정1');
  await page.getByRole('textbox', { name: '날짜' }).fill('2025-11-07');
  await page.getByRole('textbox', { name: '시작 시간' }).fill('01:00');
  await page.getByRole('textbox', { name: '종료 시간' }).fill('02:15');
  await page.getByRole('textbox', { name: '종료 시간' }).click();
  await page.getByRole('textbox', { name: '설명' }).fill('일정 중복 방지');
  await page.getByRole('textbox', { name: '위치' }).fill('우리집');
  await page.getByRole('combobox', { name: '업무' }).click();
  await page.getByRole('option', { name: '업무-option' }).click();
  await page.getByTestId('event-submit-button').click();

  // 조회
  await expect(page.getByTestId('month-view').getByText('일정1')).toBeVisible();
  await expect(page.getByTestId('event-list').getByText('일정1')).toBeVisible();

  // 중복 생성
  await page.getByRole('textbox', { name: '제목' }).fill('중복 일정');
  await page.getByRole('textbox', { name: '날짜' }).fill('2025-11-07');
  await page.getByRole('textbox', { name: '시작 시간' }).fill('01:00');
  await page.getByRole('textbox', { name: '종료 시간' }).fill('03:15');
  await page.getByRole('textbox', { name: '종료 시간' }).click();
  await page.getByRole('textbox', { name: '설명' }).fill('일정 중복 방지');
  await page.getByRole('textbox', { name: '위치' }).fill('우리집');
  await page.getByRole('combobox', { name: '업무' }).click();
  await page.getByRole('option', { name: '업무-option' }).click();
  await page.getByTestId('event-submit-button').click();

  await expect(page.getByRole('heading', { name: '일정 겹침 경고' })).toBeVisible();
  await page.getByRole('button', { name: '계속 진행' }).click();

  // 조회
  await expect(page.getByTestId('month-view').getByText('중복 일정')).toBeVisible();
  await expect(page.getByTestId('event-list').getByText('중복 일정')).toBeVisible();
});
