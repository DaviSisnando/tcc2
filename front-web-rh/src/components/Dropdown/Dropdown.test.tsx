import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import * as stories from 'components/Dropdown/Dropdown.stories';
import Dropdown from 'components/Dropdown';

const { Primary, WithLabel } = composeStories(stories);

describe('Dropdown', () => {
  const renderComponent = (customProps: Partial<IDropdownProps> = {}) => {
    const props: IDropdownProps = {
      options: [],
      placeholder: 'Selecione uma opção',
      ...customProps,
    };
    return render(<Dropdown {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a Dropdown Primary', async () => {
    render(<Primary />);
    const selectElement = screen.getByRole('combobox');
    const placeholder = screen.getByText(/Cargo/i);

    await userEvent.click(selectElement);

    const firstOption = screen.getByText('option 1');

    expect(selectElement).toBeInTheDocument();
    expect(firstOption).toBeInTheDocument();
    expect(placeholder).toBeTruthy();
  });

  it('should render a text input with label', () => {
    render(<WithLabel />);
    const labelElement = screen.getByTestId('test-input-label');
    const labelText = screen.getByText('Any Label');

    expect(labelElement).toBeInTheDocument();
    expect(labelText).toBeInTheDocument();
  });

  it('should call onSelect when select an option', async () => {
    const onSelect = vi.fn();
    renderComponent({ onSelect, options: [{ label: 'option 1', value: 'option 1' }] });

    const selectElement = screen.getByRole('combobox');

    await userEvent.click(selectElement);

    const firstOption = screen.getByText('option 1');
    await userEvent.click(firstOption);

    expect(onSelect).toBeCalled();
  });
});
