import Todo from '../src/components/Todo';
import React from 'react/addons';

const TestUtils = React.addons.TestUtils;

var component;
var spy = sinon.spy();

describe('Given an instance of the Component', () => {
  describe('when we render the component', () => {
    before(() => {

      const todo = {
        id: 'lussussu',
        text: 'Lussenluu',
        done: false
      };

      component = TestUtils.renderIntoDocument(
        <Todo onToggle={spy} todo={todo} onRemove={spy} onMove={spy} />
      );
    });
    it('should render a paragraph', () => {
      var paragraph = TestUtils.scryRenderedDOMComponentsWithTag(component, 'p');

      expect(paragraph).to.have.length.above(0, 'Expected to have element with tag <p>');
      expect(spy).to.be.calledOnce;
    });
  });
});
