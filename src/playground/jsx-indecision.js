console.log('app.js is running');

// jsx - JavaScript XML

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['Option1', 'Option2']
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    render()
  }
}

const onRemoveAll = () => {
  app.options = []
  render()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option);
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Your options' : 'No Options'}</p>
      <button onClick={onMakeDecision}>Make Decision</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'></input>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template,appRoot)

}
render()
