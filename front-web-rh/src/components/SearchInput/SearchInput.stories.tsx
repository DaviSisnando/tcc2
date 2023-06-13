import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchInput from 'components/SearchInput';

export default {
  title: 'SearchInput',
  args: {},

  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = args => <SearchInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Busque pela matrícula ou nome do colaborador ',
};
