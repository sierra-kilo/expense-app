import React from 'react'

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    notes: '',
    number: ''
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  }
  onNotesChange = (e) => {
    const notes = e.target.value;
    this.setState(() => ({ notes }))
  }
  onAmountChange = (e) => {
    const amount = e.target.value
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            >
            </input>
          <input
            type='text'
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
            >
          </input>
          <textarea
            placeholder='Add notes for the expense (optional)'
            value={this.state.notes}
            onChange={this.onNotesChange}
            >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
