import { screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from 'components/Header/Header.stories';
import { renderWithRouter } from 'utils/testWrapper';
import Header from 'components/Header';

const { Primary } = composeStories(stories);

describe('Header', () => {
  const renderComponent = (customProps: Partial<IHeaderProps> = {}) => {
    const props: IHeaderProps = {
      icon: 'https://cdn-icons-png.flaticon.com/512/5277/5277459.png',
      iconAlt: 'icon',
      children: undefined,
      ...customProps,
    };
    return renderWithRouter(<Header {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render authenticated header', () => {
    renderWithRouter(<Primary />);
    const navigationContainer = screen.getByTestId('test-navigation');
    const itemsContainer = screen.getByTestId('test-navigation-items');
    expect(navigationContainer).toBeInTheDocument();

    expect(itemsContainer.childElementCount).toBe(3);
  });

  it('should render header without items', () => {
    renderComponent();
    const navigationContainer = screen.getByTestId('test-navigation');
    const itemsContainer = screen.getByTestId('test-navigation-items');
    expect(navigationContainer).toBeInTheDocument();
    expect(itemsContainer.childElementCount).toBe(0);
  });
});
