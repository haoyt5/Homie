import React from 'react';
import Enzyme,{ shallow, mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { storeFactory } from './testUtilities';
import CreateTask from '../components/tasks/CreateTask';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup =(props={}, state=null, initState={}) =>{
    const store = storeFactory(initState);
    const wrapper = shallow(<CreateTask store={store} />)
    if (state) wrapper.setState(state)
    return wrapper;
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
        test('the state of verifybyImage start at false',()=>{
            const wrapper = setup();
            const initialCheckboxState = wrapper.state('verifybyImage')
            expect(initialCheckboxState).toBeFalsy()
        })
    })
})
describe('update state',() =>{
    test('toggling the checkbox to switch between true and false ',(initState={})=>{
        const store = storeFactory(initState);
        const mntwrapper = mount(<CreateTask store={store} />)
        //find and check the initial checkbox checed value should be false 
        const checkbox = () => mntwrapper.find(`[data-test="createtask-checkbox"]`)
        expect(checkbox().get(0).props.checked).toBeFalsy()
        //toggle and get the opposite value
        checkbox().simulate('change',{currentTarget: {checked: true}});
        mntwrapper.update();
        expect(checkbox().get(0).props.checked).toBeTruthy()
        
         //toggle again and get the opposite value
        checkbox().simulate('change',{currentTarget: {checked: true}});
        mntwrapper.update();
        expect(checkbox().get(0).props.checked).toBeFalsy()
    })
})
