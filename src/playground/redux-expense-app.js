import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type:'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})
// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id

})
// EDIT_EXPENSE

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
})
// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})
//Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
      case 'REMOVE_EXPENSE':
        return state.filter(({id}) => id !== action.id)
      case 'EDIT_EXPENSE':
        return state.map((expense) => {
          if (expense.id === action.id) {
            return {
              ...expense,
              ...action.updates
            }
          } else {
            return expense;
          }
        })
    default:
      return state
  }
}

//Filter Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBY: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBY: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBY: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
}

//get visible expenses
const getVisibleExpenses = (expenses, {text, sortBY, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b)=> {
    if (sortBY === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    }
    if (sortBY === 'amount') {
      return a.amount < b.createdAt ? 1 : -1
    }
  })
}

//Store Creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
)

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 10000, createdAt: -2000}))
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 300, createdAt: 2000}))
// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500} ))
//
// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(250))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(2500))





const demoState = {
  expenses: [{
    id: ';lkajsdjhaf',
    description: 'Jan Rent',
    note: 'This ws the final payment for that bill',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBY: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
}