import React from 'react'
import ConnectedExpenseList from './expenseList'
import ExpenseListFilters from './ExpenseListFilters'


const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters/>
    <ConnectedExpenseList/>
  </div>
)

export default ExpenseDashboardPage;
