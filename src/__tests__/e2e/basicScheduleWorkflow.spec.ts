import { test, expect } from '@playwright/test';

// 기본 일정 관리
test('기본 일정 관리', async ({ page }) => {
  await page.goto('/');

  // 생성
  await page.getByRole('textbox', { name: '제목' }).fill('기본 일정 관리 테스트');
  await page.getByRole('textbox', { name: '날짜' }).fill('2025-11-07');
  await page.getByRole('textbox', { name: '시작 시간' }).fill('01:00');
  await page.getByRole('textbox', { name: '종료 시간' }).fill('02:15');
  await page.getByRole('textbox', { name: '종료 시간' }).click();
  await page.getByRole('textbox', { name: '설명' }).fill('기본 일정 관리');
  await page.getByRole('textbox', { name: '위치' }).fill('우리집');
  await page.getByRole('combobox', { name: '업무' }).click();
  await page.getByRole('option', { name: '업무-option' }).click();
  await page.getByTestId('event-submit-button').click();

  // 조회
  await expect(page.getByTestId('month-view').getByText('기본 일정 관리 테스트')).toBeVisible();
  await expect(page.getByTestId('event-list').getByText('기본 일정 관리 테스트')).toBeVisible();

  // 수정
  const editButton = page.getByRole('button', { name: 'Edit event' }).first();
  await editButton.click();

  await page.getByRole('textbox', { name: '제목' }).fill('기본 일정 관리 테스트 수정');
  await page.getByRole('textbox', { name: '날짜' }).fill('2025-11-08');
  await page.getByRole('textbox', { name: '시작 시간' }).fill('01:00');
  await page.getByRole('textbox', { name: '종료 시간' }).fill('02:15');
  await page.getByRole('textbox', { name: '종료 시간' }).click();
  await page.getByRole('textbox', { name: '설명' }).fill('기본 일정 관리 수정');
  await page.getByRole('textbox', { name: '위치' }).fill('우리집');

  await page.getByTestId('event-submit-button').click();

  await expect(
    page.getByTestId('event-list').getByText('기본 일정 관리 테스트 수정')
  ).toBeVisible();
  await expect(page.getByTestId('event-list').getByText('2025-11-08')).toBeVisible();

  // 삭제
  const deleteButton = page.getByRole('button', { name: 'Delete event' }).first();
  await deleteButton.click();

  await expect(
    page.getByTestId('event-list').getByText('기본 일정 관리 테스트 수정')
  ).not.toBeVisible();
  await expect(page.getByTestId('event-list').getByText('2025-11-08')).not.toBeVisible();
});
