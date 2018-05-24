import React from 'react'
import Option from './Option'

const Options = (props) => {
  return (
    <div>
      {(props.options.length === 0) && (
        <p>Please enter some data</p>
      )}
      <ol>{
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
      </ol>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
  )
}

export default Options
