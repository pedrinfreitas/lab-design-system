import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, ICheckboxProps } from "./Checkbox";
import { Text } from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <label className="flex items-center gap-2">
          {Story()}
          <Text size="sm"> Lembrar de mim por 30 dias</Text>
        </label>
      );
    },
  ],
} as Meta<ICheckboxProps>;

export const Default: StoryObj<ICheckboxProps> = {
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
