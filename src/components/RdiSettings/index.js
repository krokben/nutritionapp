import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import './style.css';

const bem = new BEMHelper({name: 'rdi-settings'});

export default class RdiSettings extends Component {
  render() {
    return (
      <div>
        <h1>RDI Settings</h1>
        <table {...bem('table')}>
          <thead>
            <tr>
              <th>Nutrition</th>
              <th {...bem('value')}>RDI</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.rdi.map((x, i) => (
                <tr
                  key={`rdi-item${i}`}
                  {...bem('item')}
                >
                  <td>{x.type}</td>
                  <td {...bem('value')}>{x.value} {x.unit}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}
