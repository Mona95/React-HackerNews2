import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import App from './components/App';

describe('App', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<App/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

