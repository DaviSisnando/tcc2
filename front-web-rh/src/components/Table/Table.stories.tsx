import { ComponentStory, ComponentMeta } from '@storybook/react';

import Table from 'components/Table';

export default {
  title: 'Table',
  args: {},

  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headerValues: ['Nome', 'Matrícula', 'Status', 'Cargo', 'Setor', 'E-mail'],
  row: [
    {
      name: 'Nome1',
      id: '123456',
      registration: '12345',
      status: 'ativo',
      role: 'dev',
      email: 'a@a.com',
    },
    {
      name: 'Nome2',
      id: '123456',
      registration: '12345',
      status: 'desligado',
      role: 'dev',
      email: 'a@a.com',
    },
    {
      name: 'Nome3',
      id: '123456',
      registration: '12345',
      status: 'ativo',
      role: 'dev',
      email: 'a@a.com',
    },
    {
      name: 'Nome4',
      id: '123456',
      registration: '12345',
      status: 'ferias',
      role: 'dev',
      email: 'a@a.com',
    },
    {
      name: 'Nome5',
      id: '123456',
      registration: '12345',
      status: 'ativo',
      role: 'dev',
      email: 'a@a.com',
    },
    {
      name: 'Nome6',
      id: '123456',
      registration: '12345',
      status: 'ativo',
      role: 'dev',
      email: 'a@a.com',
    },
    {
      name: 'Nome7',
      id: '123456',
      registration: '12345',
      status: 'ativo',
      role: 'dev',
      email: 'a@a.com',
    },
    {
      name: 'Nome8',
      id: '123456',
      registration: '12345',
      status: 'ativo',
      role: 'dev',
      email: 'a@a.com',
    },
  ],
};
