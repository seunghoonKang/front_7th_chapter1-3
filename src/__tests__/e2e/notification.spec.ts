import { test, expect } from '@playwright/test';

// 알림 기능 테스트
test('알림이 정상적으로 표시되는지 확인', async ({ page }) => {
  // 시간을 2025-11-07 09:00:00으로 고정
  const fixedTime = new Date('2025-11-07T09:00:00');

  await page.clock.install();
  await page.clock.setFixedTime(fixedTime);

  await page.goto('/');
  await page.waitForLoadState('networkidle');

  // 일정 생성 - 현재시간 09:00, 일정시간 09:15, 알림 10분 전
  await page.getByRole('textbox', { name: '제목' }).fill('알림 테스트 일정');
  await page.getByRole('textbox', { name: '날짜' }).fill('2025-11-07');
  await page.getByRole('textbox', { name: '시작 시간' }).fill('09:15');
  await page.getByRole('textbox', { name: '종료 시간' }).fill('10:00');
  await page.getByRole('textbox', { name: '종료 시간' }).click();
  await page.getByRole('textbox', { name: '설명' }).fill('알림 테스트');
  await page.getByRole('textbox', { name: '위치' }).fill('테스트 위치');
  await page.getByRole('combobox', { name: '업무' }).click();
  await page.getByRole('option', { name: '업무-option' }).click();

  await page.getByTestId('event-submit-button').click();
  await page.waitForLoadState('networkidle');

  // 시간을 09:06으로 진행 (알림 시간 09:05를 지남)
  await page.clock.setFixedTime(new Date('2025-11-07T09:06:00'));

  await page.waitForTimeout(2000);

  const alerts = page.locator('[role="alert"]');
  const alertCount = await alerts.count();

  // 조회
  expect(alertCount).toBeGreaterThanOrEqual(1);
  await expect(alerts.first()).toBeVisible();
});
