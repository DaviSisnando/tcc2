import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from 'components/Access/Access.stories';
import Access from 'components/Access';

const { Locked, Unlocked } = composeStories(stories);

describe('Access', () => {
  const renderComponent = (customProps: Partial<IAccessProps> = {}) => {
    const props: IAccessProps = {
      type: 'locked',
      ...customProps,
    };
    return render(<Access {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a locked screen', () => {
    render(<Locked />);
    const titleElement = screen.getByText(/Acesso negado/i);
    const messageElement = screen.getByText(/O usuário nao possui permissão para entrar/i);
    expect(titleElement).not.toBeNull();
    expect(messageElement).not.toBeNull();
  });

  it('should render a unlocked screen', () => {
    render(<Unlocked />);
    const titleElement = screen.getByText(/Acesso liberado/i);
    const messageElement = screen.getByText(/Usuário validado e a porta pode ser aberta/i);
    expect(titleElement).not.toBeNull();
    expect(messageElement).not.toBeNull();
  });
});
