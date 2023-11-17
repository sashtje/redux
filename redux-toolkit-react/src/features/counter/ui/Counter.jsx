import {useDispatch, useSelector} from "react-redux";

import { increment, decrement } from "../model/counterSlice";

export const Counter = () => {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
     <div>Counter: {counter}</div>

     <div>
       <button type='button' onClick={handleIncrement}>Increment</button>
       <button type='button' onClick={handleDecrement}>Decrement</button>
     </div>
    </>
  );
};
