import type { Meta, StoryObj } from "@storybook/react";
import  { Button, ButtonProps } from "./index"

export default {
    title: "Components/Button", // story 이름
    component: Button,
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Small: Story = {
    args: {
        size: "small",
        label: "small",
    }
};

export const Large: Story = {
    args: {
        size: "large",
        label: "large",
    }
};