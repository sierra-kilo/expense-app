import { createStore } from 'redux';

//action generators return action objects
const incrementCount = ( { incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ( { decrementBy = 1 } = {} ) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: "RESET"
})

const setCount = ({ count = 0} = {}) => ({
  type: 'SET',
  count
})

const countReducer = (state ={ count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
    //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        count: state.count + action.incrementBy
      }
      break;
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
      break;
    case 'RESET':
      return {
        count: state.count = 0
      }
      break;
      case 'SET':
        return {
          count: action.count
        }
        break;
    default:
      return state;
  }
}

const store = createStore(countReducer);
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount());

// unsubscribe()

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 29 }))

store.dispatch(setCount({ count: 101 }))
