import React from 'react';
import Enzyme,{ shallow, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { storeFactory } from './testUtilities';
import CreateTask from '../components/tasks/CreateTask';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup =(initState={}) =>{
    const store = storeFactory(initState);
    return shallow(<CreateTask store={store} />);
}

const findTestAttr = (wrapper, value) =>{
    return wrapper.dive().find(`[data-test="${value}"]`);
}

describe('render',() =>{
    describe('nothing has not been submitted', ()=>{
        test('renders component without error',()=>{
            const wrapper = setup();
            const createTaskComponent = findTestAttr(wrapper,'component-create-task');
            expect(createTaskComponent.length).toBe(1);
        })
        test('renders toggle input',()=>{
            const wrapper = setup();
            const checkbox = findTestAttr(wrapper,'createtask-checkbox');
            expect(checkbox.length).toBe(1);
            
        })
        test('renders submit button',()=>{
            const wrapper = setup();
            const button = findTestAttr(wrapper,'createtask-button');
            expect(button.length).toBe(1);
        })
        test('checkbox of verifybyImage start at false',()=>{
            const wrapper = setup();
            const initialCheckboxState = wrapper.state('verifybyImage')
            expect(initialCheckboxState).toBeFalsy()
        })
    })
})
describe('update state',() =>{
    // test('clicking checkbox toggle the check display',()=>{
            
    // })
})
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