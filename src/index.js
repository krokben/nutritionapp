import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { Provider } from 'react-redux';

const initialState = {
  app: {
    menu: false,
    rdiSettings: true
  },
  rdi: [
    {type: 'kcal',             value: 2700, unit: 'kcal'},
    {type: 'protein',          value:   70, unit: 'g'},
    {type: 'calcium',          value:  800, unit: 'mg'},
    {type: 'iron',             value:    9, unit: 'mg'},
    {type: 'magnesium',        value:  375, unit: 'mg'},
    {type: 'phosphorus',       value:  700, unit: 'mg'},
    {type: 'potassium',        value: 2000, unit: 'mg'},
    {type: 'sodium',           value: 2400, unit: 'mg'},
    {type: 'zinc',             value:    9, unit: 'mg'},
    {type: 'copper',           value:    1, unit: 'mg'},
    {type: 'manganese',        value:    2, unit: 'mg'},
    {type: 'selenium',         value:   55, unit: 'µg'},
    {type: 'fluoride',         value:    3, unit: 'mg'},
    {type: 'vit_c',            value:   80, unit: 'mg'},
    {type: 'thiamin',          value:  1.1, unit: 'mg'},
    {type: 'riboflavin',       value:  1.4, unit: 'mg'},
    {type: 'niacin',           value:   16, unit: 'mg'},
    {type: 'panthotenic_acid', value:    6, unit: 'mg'},
    {type: 'vit_b6',           value:  1.4, unit: 'mg'},
    {type: 'folate',           value:  200, unit: 'µg'},
    {type: 'vit_b12',          value:  2.5, unit: 'µg'},
    {type: 'vit_a',            value:  800, unit: 'µg'},
    {type: 'vit_e',            value:   12, unit: 'mg'},
    {type: 'vit_d',            value:    5, unit: 'µg'},
    {type: 'vit_k',            value:   75, unit: 'µg'},
  ]
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();