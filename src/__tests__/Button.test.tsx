import { render, fireEvent } from '@testing-library/react';
import ActionButton from '../components/ActionButton';

describe('ActionButton component', () => {
  test('renders correctly and triggers onClick event', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<ActionButton handleChangeBackground={mockOnClick} />);

    const buttonElement = getByText('Get Started');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.tagName).toBe('BUTTON');

    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
