import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';

import { increment, decrement, reset, set } from '../../slices/CounterSlice.js';

export default function Counter(){
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    const inputRef = useRef();

    function handleSetClick(){
        const val = inputRef.current.value;
        const num = parseInt(val);
        console.log(num);
        if(typeof(num) === 'number'){
            dispatch(set(num));
        }
    }

    return <>
        <button onClick={ () => dispatch(decrement()) }>-</button>
        <button onClick={ () => dispatch(reset()) }>{ count }</button>
        <button onClick={ () => dispatch(increment()) }>+</button>
        <button onClick={ handleSetClick }>set</button>
        <input ref={inputRef}></input>
    </>
}