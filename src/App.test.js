import { fireEvent, render, screen } from '@testing-library/react';
import App, {replaceCamelWithSpaces} from './App';

test('button has correct initial color', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })

  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be Midnight Blue
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'})

  // expect the button text to be 'Change to Medium VioletRed'
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red')
});

test('initial conditions', () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('when checkbox is checked, button should be disabled', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  // checkbox is checked
  fireEvent.click(checkbox);

  // button should be disabled
  expect(button).toBeDisabled();

  // checkbox is unchecked
  fireEvent.click(checkbox);

  // button should be enabled
  expect(button).toBeEnabled();
});

test('button should be gray when it is disabled', ()=>{
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  // disable button
  fireEvent.click(checkbox);
  // button should be gray
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  // enable button
  fireEvent.click(checkbox);

  // click button
  fireEvent.click(button);

  // disable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'gray'})

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue'})
})

describe('spaces before camel-case capital letters', ()=>{
  test('Works for no inner capital letters', ()=>{
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letters', ()=>{
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', ()=>{
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });


})