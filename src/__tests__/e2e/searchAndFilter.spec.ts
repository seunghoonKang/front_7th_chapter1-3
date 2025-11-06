import { test, expect } from '@playwright/test';

test('검색 및 필터링에 대한 검증', async ({ page }) => {
  await page.goto('/');

  // 생성
  await page.getByRole('textbox', { name: '제목' }).fill('밥 먹기');
  await page.getByRole('textbox', { name: '날짜' }).fill('2025-11-07');
  await page.getByRole('textbox', { name: '시작 시간' }).fill('01:00');
  await page.getByRole('textbox', { name: '종료 시간' }).fill('02:15');
  await page.getByRole('textbox', { name: '종료 시간' }).click();
  await page.getByRole('textbox', { name: '설명' }).fill('맛있는 반찬 먹기');
  await page.getByRole('textbox', { name: '위치' }).fill('우리집');
  await page.getByRole('combobox', { name: '업무' }).click();
  await page.getByRole('option', { name: '업무-option' }).click();
  await page.getByTestId('event-submit-button').click();

  // 조회
  await expect(page.getByTestId('month-view').getByText('밥 먹기')).toBeVisible();
  await expect(page.getByTestId('event-list').getByText('밥 먹기')).toBeVisible();

  // 두 번째 생성
  await page.getByRole('textbox', { name: '제목' }).fill('잘 자기');
  await page.getByRole('textbox', { name: '날짜' }).fill('2025-11-14');
  await page.getByRole('textbox', { name: '시작 시간' }).fill('01:00');
  await page.getByRole('textbox', { name: '종료 시간' }).fill('02:15');
  await page.getByRole('textbox', { name: '종료 시간' }).click();
  await page.getByRole('textbox', { name: '설명' }).fill('완전 푹 잠자기');
  await page.getByRole('textbox', { name: '위치' }).fill('우리집');
  await page.getByRole('combobox', { name: '업무' }).click();
  await page.getByRole('option', { name: '업무-option' }).click();
  await page.getByTestId('event-submit-button').click();

  // 조회
  await expect(page.getByTestId('month-view').getByText('잘 자기')).toBeVisible();
  await expect(page.getByTestId('event-list').getByText('잘 자기')).toBeVisible();

  // 제목 검색
  await page.getByRole('textbox', { name: '일정 검색' }).fill('밥');
  await expect(page.getByTestId('event-list').getByText('밥 먹기')).toHaveCount(1);
  await expect(page.getByTestId('event-list').getByText('잘 자기')).toHaveCount(0);
  await expect(page.getByTestId('month-view').getByText('밥 먹기')).toHaveCount(1);
  await expect(page.getByTestId('month-view').getByText('잘 자기')).toHaveCount(0);

  // 없는 것 검색 하기
  await page.getByRole('textbox', { name: '일정 검색' }).fill('야호');
  await expect(page.getByTestId('event-list').getByText('야호')).toHaveCount(0);
  await expect(page.getByTestId('month-view').getByText('야호')).toHaveCount(0);
  await expect(page.getByText('검색 결과가 없습니다')).toBeVisible();

  // 설명 검색
  await page.getByRole('textbox', { name: '일정 검색' }).fill('맛있는 반찬 먹기');
  await expect(page.getByTestId('event-list').getByText('맛있는 반찬 먹기')).toHaveCount(1);
  await expect(page.getByTestId('month-view').getByText('밥 먹기')).toHaveCount(1);
  await expect(page.getByTestId('event-list').getByText('잘 자기')).toHaveCount(0);
  await expect(page.getByTestId('month-view').getByText('잘 자기')).toHaveCount(0);

  // 위치 검색
  await page.getByRole('textbox', { name: '일정 검색' }).fill('우리집');
  await expect(page.getByTestId('event-list').getByText('밥 먹기')).toHaveCount(1);
  await expect(page.getByTestId('month-view').getByText('밥 먹기')).toHaveCount(1);
  await expect(page.getByTestId('event-list').getByText('잘 자기')).toHaveCount(1);
  await expect(page.getByTestId('month-view').getByText('잘 자기')).toHaveCount(1);
});
