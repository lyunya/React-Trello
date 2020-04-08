import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
  
    // render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<Card key = {0} title={'title'} content={'item.content'}/>, div);
  
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the Card UI as expected', () => {
    const tree = renderer
      .create(<Card key = {0} title={'title'} content={'item.content'}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });