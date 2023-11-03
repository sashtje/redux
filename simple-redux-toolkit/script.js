const counterSlice = RTK.createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value++;
    },
    decrement: state => {
      state.value--;
    }
  }
});

const {increment, decrement} = counterSlice.actions;

const store = RTK.configureStore({
  reducer: counterSlice.reducer,
});

const counter = document.getElementById('counter');

store.subscribe(updateCounterValueInDom);

function updateCounterValueInDom() {
  counter.innerText = store.getState().value;
}

const handleIncrement = () => {
  store.dispatch(increment());
};

const handleDecrement = () => {
  store.dispatch(decrement());
};

const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

incrementBtn.addEventListener('click', handleIncrement);
decrementBtn.addEventListener('click', handleDecrement);

updateCounterValueInDom();


