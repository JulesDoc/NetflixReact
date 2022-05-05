
import React from 'react';
import './App.css';

let url = 'https://movied.herokuapp.com/discover';

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      films: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          films: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, films } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Please wait ... </h1>{' '}
        </div>
      );

    return (
      <div className='App'>
        <h1> Display Films </h1>{' '}
        {films.map((films) => (
          <ol key={films.id}>
            Title: {films.original_title}, Language: {films.original_language}, Overview:{' '}
            {films.overview}, Release date: {films.release_date}
          </ol>
        ))}
      </div>
    );
  }
}

export default App;
