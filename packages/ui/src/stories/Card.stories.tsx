import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Card } from "../card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: "text" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    title: "Card Title",
    href: "https://example.com",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Link Text 1",
    href: "https://react.dev",
    children: (
      <img src="//upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/100px-React_Logo_SVG.svg.png" />
    ),
  },
};

export const Secondary: Story = {
  args: {
    title: "Angular",
    href: "https://angular.dev",
    children: (
      <img src="//upload.wikimedia.org/wikipedia/commons/thumb/0/07/Angular_Logo_SVG.svg/200px-Angular_Logo_SVG.svg.png" />
    ),
  },
};
