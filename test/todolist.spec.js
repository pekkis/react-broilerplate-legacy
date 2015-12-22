import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoLists from '../src/components/TodoLists';
import TodoList from '../src/components/TodoList';
import TodoForm from '../src/components/TodoForm';
import Todo from '../src/components/Todo';
import { List, Range } from 'immutable';
import { wrap } from 'react-stateless-wrapper';

const renderer = TestUtils.createRenderer();

var component;
var spy = sinon.spy();

describe('<TodoList />', () => {
    it('puuppa', () => {
        expect(true).to.equal(true);
    });
});
