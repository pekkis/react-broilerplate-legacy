import { shallow } from 'enzyme';
import React from 'react';
import TodoList from '../src/components/TodoList';
import Todo from '../src/components/Todo';

describe('<TodoList />', () => {

    it('should render three <Todo /> components', () => {
        const wrapper = shallow(<TodoList />);
        expect(wrapper.find(Todo)).to.have.length(3);
    });

});
