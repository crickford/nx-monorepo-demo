import type { Meta, StoryObj } from '@storybook/react';
import { CommonUi } from './common-ui';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CommonUi> = {
  component: CommonUi,
  title: 'CommonUi',
};
export default meta;
type Story = StoryObj<typeof CommonUi>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CommonUi!/gi)).toBeTruthy();
  },
};
