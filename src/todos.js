import { List } from 'immutable';
import uuid from 'node-uuid';

export default List.of(
    {
        id: uuid.v4(),
        todo: 'Hanki 100 litraa kuningasvettä',
        done: true,
    },
    {
        id: uuid.v4(),
        todo: 'Osta teollisia puutarhanhoitovälineitä',
        done: true,
    },
    {
        id: uuid.v4(),
        todo: 'Paloittele "liha"',
        done: true,
    },
    {
        id: uuid.v4(),
        todo: 'Liota palat',
        done: true,
    },
    {
        id: uuid.v4(),
        todo: 'Kippaa happo Vantaajokeen',
        done: false,
    },
    {
        id: uuid.v4(),
        todo: 'Pese kylppäri HYVIN',
        done: false,
    },
    {
        id: uuid.v4(),
        todo: 'Palauta puutarhanhoitovehkeet 2 vko kuluessa (takuupalautus)',
        done: false,
    }
);
