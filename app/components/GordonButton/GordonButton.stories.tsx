import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import GordonButton from './GordonButton';

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

const meta = {
  component: GordonButton,
  title: 'Button',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
  },
} satisfies Meta<typeof GordonButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Test Task',
    onClick: () => alert('Button clicked'),

    disabled: false,
  },
};

export const Pinned: Story = {
  args: {
    label: 'Test Task (Pinned)',
    onClick: () => alert('Pinned Button clicked'),

    disabled: false,
  },
};
