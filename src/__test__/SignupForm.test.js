/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignupForm from '../components/SignupForm';

let getByTestId;
const handleSubmit = () => console.log('Handled');
beforeEach(() => {
  const component = render(
    <Router>
      <SignupForm handleSubmit={handleSubmit} />
    </Router>,
  );
  getByTestId = component.getByTestId;
});

it('renders the LoginForm component', () => {
  const component = renderer
    .create(
      <Router>
        <SignupForm handleSubmit={handleSubmit} />
      </Router>,
    )
    .toJSON();

  expect(component).toMatchSnapshot();
});

test('should render SignupForm component with correct heading', () => {
  const headingText = getByTestId('SignupForm-heading');

  expect(headingText).toHaveTextContent('Sign Up');
});
