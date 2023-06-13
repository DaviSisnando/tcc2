import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from 'components/TextInput';

export default {
  title: 'TextInput',
  args: {
    placeholder: 'Placeholder',
  },
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => <TextInput {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Nome',
  onChange: event => console.log(event),
};

export const MaxLength = Template.bind({});
MaxLength.args = {
  maxLength: 20,
};

export const Password = Template.bind({});
Password.args = {
  placeholder: 'Senha',
  isPassword: true,
};

export const Date = Template.bind({});
Date.args = {
  mask: '99/99/9999',
  placeholder: 'Data',
  maxLength: 20,
};

export const Cpf = Template.bind({});
Cpf.args = {
  mask: '999.999.999-99',
  placeholder: 'CPF',
};
