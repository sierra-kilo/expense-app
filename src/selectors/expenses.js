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
      return a.amount < b.amount ? 1 : -1
    }
  })
}

export default getVisibleExpenses;
