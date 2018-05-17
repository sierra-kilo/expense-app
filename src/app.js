console.log('app.js is running');

// jsx - JavaScript XML

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Your options' : 'No Options'}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

const user = {
  name: 'The Dude',
  age: 500,
  location: 'There',
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
};
const template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age>= 18 && <p>Age: {user.age}</p> }
    {/* <p>Age: {user.age}</p> */}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)
