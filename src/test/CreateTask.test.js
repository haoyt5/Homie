import React from 'react';
import Enzyme,{ shallow, render } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { storeFactory } from './testUtilities'
import CreactTask from '../components/tasks/CreateTask'


Enzyme.configure({ adapter: new EnzymeAdapter() });

// const setup = (initState={}) => {
//     const store = storeFactory(initState)
//     const wrapper = shallow(<CreactTask store={store}/>);
//     console.log(wrapper.debug())
// }
// setup();
// const setup = (props={}, state=null) => {
//     // const store = storeFactory(initState)
//     // const wrapper = shallow(<CreactTask store={store}/>);
//     // console.log(wrapper.debug())
//     return shallow(<CreactTask />)
// }
// setup();

describe('render',() =>{
    describe('nothing has not been submitted', ()=>{
        test('renders component without error',(initState={})=>{
            const store = storeFactory(initState)
            const wrapper = shallow(<CreactTask store={store} />)
            const createTaskComponent = wrapper.dive().find('[data-test="component-create-task"]')
            expect(createTaskComponent.length).toBe(1);
        })
        test('renders toggle input',(initState={})=>{
            const store = storeFactory(initState)
            const wrapper = shallow(<CreactTask store={store} />)
            const checkbox = wrapper.dive().find('[data-test="createtask-checkbox"]')
            expect(checkbox.length).toBe(1);
            
        })
        test('renders submit button',(initState={})=>{
            const store = storeFactory(initState)
            const wrapper = shallow(<CreactTask store={store} />)
            const button = wrapper.dive().find('[data-test="createtask-button"]')
            expect(button.length).toBe(1);
        })
        test('checkbox start at false',(initState={})=>{
            
        })
    })
})
describe('update state',() =>{
    // test('clicking checkbox toggle the check display',()=>{
            
    // })
})