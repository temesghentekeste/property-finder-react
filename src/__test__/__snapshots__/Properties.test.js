import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Properties from '../../containers/Properties';
import store from '../../store';

const properties = [
  {
    data: [
      {
        id: '59',
        type: 'property',
        attributes: {
          name: 'MMX',
          address: 'Nsambia, Texas Club',
          monthly_price: '500.0',
          description: 'bb',
          is_for_rent: true,
          featured_image:
            'https://ichef.bbci.co.uk/news/976/cpsprodpb/6127/production/_117317842_065760657.jpg',
          is_favorite: false,
        },
      },
    ],
  },
];

it('renders the Properties component', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Properties properties={properties} />
          </Router>
          ,
        </Provider>,
      )
      .toJSON();
  
    expect(component).toMatchSnapshot();
  });
