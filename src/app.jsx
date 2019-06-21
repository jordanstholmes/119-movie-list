const movies = [
  {id:0, title: 'Mean Girls'},
  {id:1, title: 'Hackers'},
  {id:2, title: 'The Grey'},
  {id:3, title: 'Sunshine'},
  {id:4, title: 'Ex Machina'},
];

/*
- add a search bar (and button)
  - figure out input text field


- add some way to handle click events
  - store the text value for the input in React state
  - when new input is entered, first change it in the React state,
  then render the component based off that React state.



- add functionality to handle search



*/

const App = () => (
  <div>
    <h1>MovieList</h1>
      <input type="text" />
      <button onClick={() => console.log('Jordan')}>Search</button>
    <ul>
      { movies.map(movie => <li key={ movie.id } >{ movie.title }</li>) }
    </ul>
  </div>
);
export default App;