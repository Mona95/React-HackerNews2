import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import App, {Search, Button, Table} from './components/App';

Enzyme.configure({
  adapter : new Adapter()
});

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

describe('Search', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Search/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Search/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot(); 
  });
});

describe('Button', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Button/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Button/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot(); 
  });
});

describe('Table', () => {
  const props = {
          list: [
            { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
            { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' },
          ],
        };
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<Table {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Table {...props}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows two items in list', () => {
    const element = shallow(
      <Table {...props} />
    );
    expect(element.find('.table-row').length).toBe(2);
  });
});


