// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the App component available
import App from './App';
import STORE from './store';

import renderer from 'react-test-renderer';


// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<App store = {STORE}/>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the App UI as expected', () => {
  const tree = renderer
    .create(<App store = {STORE}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });