import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Property from '../components/PropertyComponent';

let getByTestId;

beforeEach(() => {
  const component = render(
    <Router>
      <Property
        name="Test Property"
        address="Test Address"
        price="500"
        description="Lorem ipsum"
        image="https://ichef.bbci.co.uk/news/976/cpsprodpb/6127/production/_117317842_065760657.jpg"
        isForRent={true}
      />
    </Router>
  );
  getByTestId = component.getByTestId;
});

it('renders the property component', () => {
  const component = renderer
    .create(
      <Router>
        <Property
        name="Test Property"
        address="Test Address"
        price="500"
        description="Lorem ipsum"
        image="https://ichef.bbci.co.uk/news/976/cpsprodpb/6127/production/_117317842_065760657.jpg"
        isForRent={true}
      />
      </Router>
    )
    .toJSON();

  expect(component).toMatchSnapshot();
});
