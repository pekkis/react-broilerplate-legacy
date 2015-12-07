import { List } from 'immutable';
import uuid from 'node-uuid';

export default List.of(
    {
        text: 'Get 100 litres of battery acid',
        done: true
    },
    {
        text: 'Acquire gardening tools',
        done: false
    },
    {
        text: 'Carve up the "meat"',
        done: true
    }
).map(todo => {

    return {
        ...todo,
        id: uuid.v4()
    };

});
