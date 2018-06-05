const React = require('react')
const ReactDOM = require('react-dom')
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configStore()

// console.log(state);

store.dispatch(addExpense({ description: 'Rent', amount: 5500, createdAt: 1 }))
store.dispatch(addExpense({ description: 'Water Bill', amount: 5000, createdAt: 2 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 40000, createdAt: 0 }))
//store.dispatch(setTextFilter('water'))
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
