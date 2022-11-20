import { Label } from './Label';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
    },
    bgColor: {
      control: {
        type: 'color',
      },
    },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  value: 'Nombre:',
  size: 'normal',
};
