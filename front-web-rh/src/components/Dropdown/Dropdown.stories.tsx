import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from 'components/Dropdown';

export default {
  title: 'Dropdown',
  args: {
    placeholder: 'Cargo',
  },
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { label: 'option 1', value: 'option 1' },
    { label: 'option 2', value: 'option 2' },
    { label: 'option 3', value: 'option 3' },
  ],
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Any Label',
  options: [
    { label: 'option 1', value: 'option 1' },
    { label: 'option 2', value: 'option 2' },
    { label: 'option 3', value: 'option 3' },
  ],
};
