import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, reset } from '../../slices/CounterSlice.js';

export default function Counter(){
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return <>
        <button onClick={ () => dispatch(decrement()) }>-</button>
        <button onClick={ () => dispatch(reset()) }>{ count }</button>
        <button onClick={ () => dispatch(increment()) }>+</button>
    </>
}