const initialState = {value: 0};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return {value: state.value + 1};
    case 'decrement':
      return {value: state.value - 1};
    default:
      return state;
  }
}

const store = Redux.createStore(counterReducer);
const counter = document.getElementById('counter');

store.subscribe(updateCounterValueInDom);

function updateCounterValueInDom() {
  counter.innerText = store.getState().value;
}

const increment = () => {
  store.dispatch({type: 'increment'});
};

const decrement = () => {
  store.dispatch({type: 'decrement'});
};

const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

updateCounterValueInDom();


