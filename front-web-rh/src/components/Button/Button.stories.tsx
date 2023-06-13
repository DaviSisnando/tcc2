import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from 'components/Button';

export default {
  title: 'Button',
  args: {
    size: 'medium',
  },
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Small',
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Medium',
  onClick: () => console.log('Clicked'),
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Large',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  onClick: () => console.log('Clicked'),
  primary: false,
  borderType: 'normal',
};
