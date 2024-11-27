import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, restart } from '../../slices/CounterSlice.js';

export default function Counter(){
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return <>
        <button onClick={ decrement }>-</button>
        <button onClick={ restart }>{ count }</button>
        <button onClick={ increment }>+</button>
    </>
}