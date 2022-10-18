import { Meta, StoryObj } from "@storybook/react";
import { Button, IButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "enviar",
  },

  argTypes: {},
} as Meta<IButtonProps>;

export const Default: StoryObj<IButtonProps> = {
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
