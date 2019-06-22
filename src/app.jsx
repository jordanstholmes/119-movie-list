/*
- add a search bar (and button)
  - figure out input text field

- add functionality to handle search
  - on search click
  - compare input text to titles,
  - filter for movies whose title contains the input text
  - render our newly filtered list


  - new function (pass it the data)
  - filter the data,
  - when you click "search" filter the
  - add a thing to the state for the list of movies being rendered.
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      filterBy: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  handleChange(event) {
    const inputText = event.target.value;
    this.setState({ inputText });
  }

  searchHandler() {
    this.setState({ filterBy: this.state.inputText });
  }

  render() {
    const filteredMovies = this.props.movies.filter(movie => movie.title.includes(this.state.filterBy));
    return (
      <div>
        <h1>MovieList</h1>
          <input value={this.state.inputText} onChange={ this.handleChange } type="text" />
          <button onClick={this.searchHandler}>Search</button>
        <ul>
          { filteredMovies.map(movie => <li key={ movie.id } >{ movie.title }</li>) }
        </ul>
      </div>
    );
  }
}

export default App;