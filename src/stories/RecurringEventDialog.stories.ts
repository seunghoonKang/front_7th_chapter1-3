import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import RecurringEventDialog from '../components/RecurringEventDialog';

const meta: Meta<typeof RecurringEventDialog> = {
  title: 'Dialog/RecurringEventDialog',
  component: RecurringEventDialog,
  args: {
    open: true,
    onClose: fn(),
    onConfirm: fn(),
    mode: 'edit',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Edit: Story = {
  args: {
    mode: 'edit',
  },
};

export const Delete: Story = {
  args: {
    mode: 'delete',
  },
};
