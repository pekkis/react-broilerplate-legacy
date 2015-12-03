import { List } from 'immutable';
import uuid from 'node-uuid';

export default List.of(
    {
        id: uuid.v4(),
        todo: 'Obtain 100 liters of aqua regia',
        done: true,
    },
    {
        id: uuid.v4(),
        todo: 'Buy professional gardening tools',
        done: true,
    },
    {
        id: uuid.v4(),
        todo: 'Carve up the "meat"',
        done: true,
    },
    {
        id: uuid.v4(),
        todo: 'Dissolve the pieces',
        done: true,
    },
    {
        id: uuid.v4(),
        todo: 'Pour all the acid to the Danube',
        done: false,
    },
    {
        id: uuid.v4(),
        todo: 'Clean the bathroom',
        done: false,
    },
    {
        id: uuid.v4(),
        todo: 'Return the gardening tools and get money back',
        done: false,
    }
);
