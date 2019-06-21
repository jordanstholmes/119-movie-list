import App from './app.js';

const movies = [
  {id:0, title: 'Mean Girls'},
  {id:1, title: 'Hackers'},
  {id:2, title: 'The Grey'},
  {id:3, title: 'Sunshine'},
  {id:4, title: 'Ex Machina'},
];

ReactDOM.render(<App movies={ movies }/>, document.getElementById('app'));
