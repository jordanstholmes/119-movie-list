/*
- add a search bar (and button)
  - figure out input text field


- add some way to handle click events
  - setup "Controlled Component"
    - store the text value for the input in React state
    - when input text changes, update the state.
    - when new input is entered, first change it in the React state,
    then render the component based off that React state.

- add functionality to handle search
*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputText = event.target.value;
    this.setState({ inputText });
  }

  render() {
    console.log(this.state.inputText);
    return (
      <div>
        <h1>MovieList</h1>
          <input value={this.state.inputText} onChange={ this.handleChange } type="text" />
          <button onClick={() => console.log(this)}>Search</button>
        <ul>
          { this.props.movies.map(movie => <li key={ movie.id } >{ movie.title }</li>) }
        </ul>
      </div>
    );
  }
}

export default App;