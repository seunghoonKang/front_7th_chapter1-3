import type { Meta, StoryObj } from '@storybook/react-vite';

import { MonthView } from '../components/MonthView';
import { WeekView } from '../components/WeekView';
import { Event } from '../types';

const mockEvents: Event[] = [
  {
    id: '1',
    title: '회의',
    date: '2025-11-01',
    startTime: '10:00',
    endTime: '11:00',
    description: '팀 회의',
    location: '회의실',
    category: '업무',
    repeat: { type: 'none', interval: 0 },
    notificationTime: 10,
  },
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
    title: '운동',
    date: '2025-11-11',
    startTime: '18:00',
    endTime: '19:00',
    description: '헬스장 가기',
    location: '헬스장',
    category: '개인',
    repeat: { type: 'none', interval: 0 },
    notificationTime: 10,
  },
];

const meta = {
  title: 'Calendar/View',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const currentDate = new Date('2025-11-03');

export const Month: Story = {
  render: () => (
    <MonthView currentDate={currentDate} filteredEvents={mockEvents} notifiedEvents={['1']} />
  ),
};

export const Week: Story = {
  render: () => (
    <WeekView currentDate={currentDate} filteredEvents={mockEvents} notifiedEvents={['2']} />
  ),
};
