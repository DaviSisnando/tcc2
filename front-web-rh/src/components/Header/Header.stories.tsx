import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GoGraph } from 'react-icons/go';
import { FaSuitcase } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';

import Header from 'components/Header';
import HeaderItem from 'components/HeaderItem';
import LogoUniforAll from 'assets/images/LogoUniforAll.png';

export default {
  title: 'Header',
  args: {
    isAuthenticated: false,
    items: [],
    iconAlt: 'icon alt',
  },
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: LogoUniforAll,
  children: (
    <>
      <HeaderItem as="link">
        <GoGraph /> Dashboard
      </HeaderItem>
      <HeaderItem as="link">
        <FaSuitcase />
        Colaboradores
      </HeaderItem>
      <HeaderItem as="button" primary={false} borderType="normal">
        <MdOutlineLogout /> SAIR
      </HeaderItem>
    </>
  ),
};
