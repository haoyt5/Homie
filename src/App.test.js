import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { storeFactory } from './test/testUtilities'

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });


test('renders without crashing', (initState={}) =>{
    const store = storeFactory(initState)
    shallow(<App store={ store }/>);
})
