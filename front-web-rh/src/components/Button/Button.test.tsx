import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import * as stories from 'components/Button/Button.stories';
import Button from 'components/Button';

const { Small, Medium, Large, Secondary } = composeStories(stories);

describe('Button', () => {
  const renderComponent = (customProps: Partial<IButtonProps> = {}) => {
    const props: IButtonProps = {
      children: 'button example',
      ...customProps,
    };
    return render(<Button {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a small Button', () => {
    render(<Small />);
    const buttonElement = screen.getByText(/Small/i);
    expect(buttonElement).not.toBeNull();
  });

  it('should render a medium Button', () => {
    render(<Medium />);
    const buttonElement = screen.getByText(/Medium/i);
    expect(buttonElement).not.toBeNull();
  });

  it('should render a large Button', () => {
    render(<Large />);
    const buttonElement = screen.getByText(/Large/i);
    expect(buttonElement).not.toBeNull();
  });

  it('should render a secondary Button', () => {
    render(<Secondary />);
    const buttonElement = screen.getByText(/Secondary/i);
    expect(buttonElement).not.toBeNull();
  });

  it('should trigger function on click', async () => {
    const onClick = vi.fn();
    renderComponent({ onClick });
    const buttonElement = screen.getByText(/button example/i);
    await userEvent.click(buttonElement);
    expect(onClick).toBeCalled();
  });
});
