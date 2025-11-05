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
    title: '가장 긴 강, 가장 높은 산, 가장 멀리 떨어진 도시, 가장 큰 평평한 땅, 가장 빠른 기차',
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
    date: '2025-11-06',
    startTime: '18:00',
    endTime: '19:00',
    description: '헬스장 가기',
    location: '헬스장',
    category: '개인',
    repeat: { type: 'none', interval: 0 },
    notificationTime: 10,
  },
  {
    id: '4',
    title: '산책',
    date: '2025-11-06',
    startTime: '19:00',
    endTime: '20:00',
    description: '산책 하기',
    location: '공원',
    category: '개인',
    repeat: { type: 'none', interval: 0 },
    notificationTime: 10,
  },
  {
    id: '5',
    title: '공부',
    date: '2025-11-06',
    startTime: '20:00',
    endTime: '21:00',
    description: '공부 하기',
    location: '집',
    category: '개인',
    repeat: { type: 'none', interval: 0 },
    notificationTime: 10,
  },
  {
    id: '6',
    title: '자기계발',
    date: '2025-11-06',
    startTime: '21:00',
    endTime: '22:00',
    description: '자기계발 하기',
    location: '집',
    category: '개인',
    repeat: { type: 'none', interval: 0 },
    notificationTime: 10,
  },
];

const meta = {
  title: 'Calendar/TextOverflow',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const currentDate = new Date('2025-11-03');

export const Month: Story = {
  render: () => (
    <MonthView currentDate={currentDate} filteredEvents={mockEvents} notifiedEvents={[]} />
  ),
};

export const Week: Story = {
  render: () => (
    <WeekView currentDate={currentDate} filteredEvents={mockEvents} notifiedEvents={[]} />
  ),
};
