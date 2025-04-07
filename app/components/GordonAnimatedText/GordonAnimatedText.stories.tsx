import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { GordonAnimatedText } from './GordonAnimatedText';



const meta = {
    component: GordonAnimatedText,
    title: 'Animated Text',
    tags: ['autodocs'],
    //👇 Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
    args: { sentence: "I do code and \n make content about it!" }
} satisfies Meta<typeof GordonAnimatedText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const Pinned: Story = {
};
