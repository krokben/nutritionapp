import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { Provider } from 'react-redux';

const initialState = {
  rdi: {
    kcal: 2700,
    protein: 70,
    calcium: 800,
    iron: 9,
    magnesium: 375,
    phosphorus: 700,
    potassium: 2000,
    sodium: 2400,
    zinc: 9,
    copper: 1,
    manganese: 2,
    selenium: 55,
    fluoride: 3500,
    vit_c: 80,
    thiamin: 1.1,
    riboflavin: 1.4,
    niacin: 16,
    panthotenic_acid: 6,
    vit_b6: 1.4,
    folate: 200,
    vit_b12: 2.5,
    vit_a: 800,
    vit_e: 12,
    vit_d: 5,
    vit_k: 75
  }
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();