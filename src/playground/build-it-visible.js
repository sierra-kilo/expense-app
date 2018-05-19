console.log('build-it-visible.js is running');

const appRoot = document.getElementById('app');

const details = 'Here are some details';

let toggled = false;
const onToggle = () => {
  toggled = !toggled;
  console.log(toggled);
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>{
        (toggled) ? 'hide details' : 'show details'
      }</button>
      {toggled && (
        <p>{details}</p>
      )}
    </div>
  )
  ReactDOM.render(template,appRoot)
};

render()
