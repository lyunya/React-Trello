import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
  
    // render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<List key = {0} header = {"first card"} cards = {[0 , 1 , 2]}/>, div);
  
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the List UI as expected', () => {
    const tree = renderer
      .create(<List key = {0} header = {"first card"} cards = {[0 , 1 , 2]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });