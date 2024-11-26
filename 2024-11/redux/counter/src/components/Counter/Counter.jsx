import { useDispatch, useSelector } from 'react-redux';

import { incrementCounter, decrementCounter } from '../../store/counterActions/counterActions.js';

export default function Counter(){
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter);

    return <>
        <button onClick={() => dispatch(decrementCounter)}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(incrementCounter)}>+</button>
    </>
}