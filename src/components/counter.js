import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../action/CounterAction";


export default function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state);
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
}