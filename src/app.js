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

store.dispatch(addExpense({ description: 'Water Bill' }))
store.dispatch(addExpense({ description: 'Gas Bill' }))
store.dispatch(setTextFilter('bill'))
const state = store.getState();
console.log (getVisibleExpenses(state.expenses, state.filters))
//console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter></AppRouter>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
