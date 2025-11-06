import { test, expect } from '@playwright/test';

// 반복 일정 관리
test('반복 일정 관리', async ({ page }) => {
  await page.goto('/');

  // 생성
  await page.getByRole('textbox', { name: '제목' }).fill('반복 일정 관리 테스트');
  await page.getByRole('textbox', { name: '날짜' }).fill('2025-11-07');
  await page.getByRole('textbox', { name: '시작 시간' }).fill('01:00');
  await page.getByRole('textbox', { name: '종료 시간' }).fill('02:15');
  await page.getByRole('textbox', { name: '종료 시간' }).click();
  await page.getByRole('textbox', { name: '설명' }).fill('반복 일정 관리');
  await page.getByRole('textbox', { name: '위치' }).fill('우리집');
  await page.getByRole('combobox', { name: '업무' }).click();
  await page.getByRole('option', { name: '업무-option' }).click();
  await page.getByRole('checkbox', { name: '반복 일정' }).check();
  await page.getByText('매일').click();
  await page.getByRole('option', { name: 'weekly-option' }).click();
  await page.getByRole('textbox', { name: '반복 종료일' }).fill('2025-11-28');

  await page.getByTestId('event-submit-button').click();

  // 조회
  await expect(
    page.getByTestId('month-view').getByText('반복 일정 관리 테스트').nth(1)
  ).toBeVisible();
  await expect(
    page.getByTestId('event-list').getByText('반복 일정 관리 테스트').nth(1)
  ).toBeVisible();
  await expect(
    page.getByTestId('event-list').getByLabel('주마다 반복 (종료: 2025-11-28)').first()
  ).toBeVisible();

  // 수정
  await page.getByRole('button', { name: 'Edit event' }).nth(0).click();

  await expect(page.getByText('반복 일정 수정')).toBeVisible();
  await expect(page.getByText('해당 일정만 수정하시겠어요?')).toBeVisible();
  await page.getByText('예').click();

  await page.getByRole('textbox', { name: '제목' }).fill('반복 일정 관리 테스트 수정');
  await page.getByRole('textbox', { name: '날짜' }).fill('2025-11-08');

  await page.getByTestId('event-submit-button').click();

  await expect(
    page.getByTestId('event-list').getByText('반복 일정 관리 테스트 수정')
  ).toBeVisible();
  await expect(page.getByTestId('event-list').getByText('2025-11-08')).toBeVisible();

  // 삭제
  await page.getByRole('button', { name: 'Delete event' }).nth(1).click();

  await expect(page.getByText('반복 일정 삭제')).toBeVisible();
  await expect(page.getByText('해당 일정만 삭제하시겠어요?')).toBeVisible();
  await page.getByText('예').click();

  await expect(page.getByTestId('event-list').getByText('2025-11-14')).toHaveCount(0);
});
