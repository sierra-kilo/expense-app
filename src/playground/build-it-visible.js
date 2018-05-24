console.log('build-it-visible.js is running');

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visibility && (
          <p>Visible Details Here</p>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


// const appRoot = document.getElementById('app');
//
// const details = 'Here are some details';
//
// let toggled = false;
// const onToggle = () => {
//   toggled = !toggled;
//   console.log(toggled);
//   render();
// }
//
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onToggle}>{
//         (toggled) ? 'hide details' : 'show details'
//       }</button>
//       {toggled && (
//         <p>{details}</p>
//       )}
//     </div>
//   )
//   ReactDOM.render(template,appRoot)
// };
//
// render()
