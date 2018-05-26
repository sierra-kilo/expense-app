import React from 'react'

export default class AddOption extends React.Component {
  state = {
    err: undefined
  }

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const err = this.props.handleAddOption(option)
    this.setState(() => ( {err} ))

    if(!err) {
      e.target.elements.option.value = ''
    }
  }
  render() {
    return (
      <div>
        {this.state.err && <p className='add-option-error'>{this.state.err}</p>}
        <form className='add-option' onSubmit={this.handleAddOption}>
          <input className='add-option__input' type='text' name='option' placeholder='New Option'></input>
          <button className='button'>Add Option</button>
        </form>
      </div>
    )
  }
}
