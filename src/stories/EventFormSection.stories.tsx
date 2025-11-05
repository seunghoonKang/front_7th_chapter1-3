import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { EventFormSection } from '../components/EventFormSection';
import { Event } from '../types';

const meta: Meta<typeof EventFormSection> = {
  title: 'Events/FormSection',
  component: EventFormSection,
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockEvent: Event = {
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
};

export const Default: Story = {
  args: {
    editingEvent: null,
    title: '점심 약속',
    date: '2025-11-03',
    startTime: '12:00',
    endTime: '13:00',
    description: '친구와 점심',
    location: '레스토랑',
    category: '개인',
    isRepeating: false,
    repeatType: 'none',
    repeatInterval: 1,
    repeatEndDate: '2025-11-03',
    notificationTime: 10,
    startTimeError: null,
    endTimeError: null,
    addOrUpdateEvent: fn(),
  },
};

export const Editing: Story = {
  args: {
    editingEvent: mockEvent,
    title: '점심 약속',
    date: '2025-11-03',
    startTime: '12:00',
    endTime: '13:00',
    description: '친구와 점심',
    location: '레스토랑',
    category: '개인',
    isRepeating: false,
    repeatType: 'none',
    repeatInterval: 1,
    repeatEndDate: '2025-11-03',
    notificationTime: 10,
    startTimeError: null,
    endTimeError: null,
    addOrUpdateEvent: fn(),
  },
};

export const Repeating: Story = {
  args: {
    editingEvent: null,
    title: '점심 약속',
    date: '2025-11-03',
    startTime: '12:00',
    endTime: '13:00',
    description: '친구와 점심',
    location: '레스토랑',
    category: '개인',
    isRepeating: true,
    repeatType: 'daily',
    repeatInterval: 1,
    repeatEndDate: '2025-11-03',
    notificationTime: 10,
    startTimeError: null,
    endTimeError: null,
    addOrUpdateEvent: fn(),
  },
};
