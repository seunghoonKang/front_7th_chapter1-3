import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { EventsCard } from '../components/EventsCard';
import { Event } from '../types';

const meta: Meta<typeof EventsCard> = {
  title: 'Events/Card',
  component: EventsCard,
  decorators: [
    (Story) => (
      <div style={{ width: '600px', margin: '2rem auto' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    notifiedEvents: [],
    handleEditEvent: fn(),
    handleDeleteEvent: fn(),
  },
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

export const Normal: Story = {
  args: {
    event: mockEvent,
    notifiedEvents: [],
    handleEditEvent: fn(),
    handleDeleteEvent: fn(),
  },
};

export const Notified: Story = {
  args: {
    event: mockEvent,
    notifiedEvents: ['2'],
    handleEditEvent: fn(),
    handleDeleteEvent: fn(),
  },
};

export const Repeating: Story = {
  args: {
    event: { ...mockEvent, repeat: { type: 'daily', interval: 1 } },
    notifiedEvents: [],
    handleEditEvent: fn(),
    handleDeleteEvent: fn(),
  },
};

export const RepeatingNotified: Story = {
  args: {
    event: { ...mockEvent, repeat: { type: 'daily', interval: 1 } },
    notifiedEvents: ['2'],
    handleEditEvent: fn(),
    handleDeleteEvent: fn(),
  },
};
