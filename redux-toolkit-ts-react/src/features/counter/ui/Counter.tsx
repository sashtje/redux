import {useAppDispatch, useAppSelector} from "../../../app/hooks/hooks";
import {increment, decrement, incrementByAmount} from '../model/counterSlice';

const AMOUNT = 5;

export const Counter = () => {
  const counter = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(AMOUNT));
  };

  return (
    <>
     <div>Counter: {counter}</div>

     <div>
       <button onClick={handleIncrement}>Increment</button>
       <button onClick={handleDecrement}>Decrement</button>
       <button onClick={handleIncrementByAmount}>Increment by 5</button>
     </div>
    </>
  );
};
