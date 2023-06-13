import { ComponentStory, ComponentMeta } from '@storybook/react';

import Access from 'components/Access';

export default {
  title: 'Access',
  args: {},
  component: Access,
} as ComponentMeta<typeof Access>;

const Template: ComponentStory<typeof Access> = args => <Access {...args} />;

export const Locked = Template.bind({});
Locked.args = {
  type: 'locked',
};

export const Unlocked = Template.bind({});
Unlocked.args = {
  type: 'unlocked',
};
