/* eslint-disable no-console */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginForm from '../components/LoginForm';

let getByTestId;
const handleSubmit = () => console.log('Handled');
beforeEach(() => {
  const component = render(
    <Router>
      <LoginForm handleSubmit={handleSubmit} />
    </Router>,
  );
  getByTestId = component.getByTestId;
});

it('renders the LoginForm component', () => {
  const component = renderer
    .create(
      <Router>
        <LoginForm handleSubmit={handleSubmit} />
      </Router>,
    )
    .toJSON();

  expect(component).toMatchSnapshot();
});

test('should render LoginForm component with correct heading text', () => {
  const headingText = getByTestId('loginForm-heading');

  expect(headingText).toHaveTextContent('Sign In');
});
