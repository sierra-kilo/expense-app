//Higher order compnonent - renders another compnent
//resue code
//render hijacking
//prop manipulation
//abstact state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedCompnent) => {
  return (props) => (
    <div>

      {props.isAdmin && <p>This is private info, please dont share</p>}
      <WrappedCompnent {...props}/>
    </div>
  )
}

const requireAuthentication = (WrappedCompnent) => {
  return(props) => (
    <div>
      {props.isAuthenticated && <WrappedCompnent{...props}/>}
      {!props.isAuthenticated && <h1>Please log in</h1>}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

//ReactDOM.render(<AdminInfo isAdmin={false} info='These are the details' />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info='These are the details' />, document.getElementById('app'))
