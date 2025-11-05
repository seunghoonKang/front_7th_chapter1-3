import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { OverlappingDialog } from '../components/OverlappingDialog';
import { Event } from '../types';

const meta: Meta<typeof OverlappingDialog> = {
  title: 'Dialog/OverlappingDialog',
  component: OverlappingDialog,
  args: {
    isOverlapDialogOpen: false,
    handleClose: fn(),
    handleContinue: fn(),
    overlappingEvents: [],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const mockEvents: Event[] = [
  {
    id: '2',
    title: '점심 약속',
    date: '2025-11-03',
    startTime: '12:00',
    endTime: '13:00',
    description: '친구와 점심',
    location: '레스토랑',
    category: '개인',
    repeat: { type: 'none', interval: 0 },
    notificationTime: 10,
  },
  {
    id: '3',
    title: '겹치는 약속',
    date: '2025-11-03',
    startTime: '12:30',
    endTime: '13:10',
    description: '상사와 점심',
    location: '레스토랑',
    category: '업무',
    repeat: { type: 'none', interval: 0 },
    notificationTime: 10,
  },
];

export const Default: Story = {
  args: {
    isOverlapDialogOpen: true,
    handleClose: fn(),
    handleContinue: fn(),
    overlappingEvents: mockEvents,
  },
};
