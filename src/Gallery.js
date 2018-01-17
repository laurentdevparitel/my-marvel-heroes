import React from 'react';

import MarvelAPI from './MarvelAPI.js';
import Characters from './Characters.js';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    //console.info('Gallery.componentDidMount MarvelAPI:', MarvelAPI.getCharactersURI());

    fetch(MarvelAPI.getCharactersURI())
		.then(res => res.json())
		.then(json => {
      //console.info('JSON', json);
			this.setState({ characters: json.data.results });
		})
		.catch(err => {
			console.error('Error happened during fetching!', err);
		});
  }

  componentWillUnmount() {
    //
  }

  render() {
    return (
      <div className="App-gallery">
        <Characters data={this.state.characters} />
      </div>
    );
  }

}

export default Gallery;
