const React = require('react')
const ReactDOM = require('react-dom')
const IndecisionApp = require('./components/IndecisionApp')
import 'normalize.css/normalize.css';
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))
