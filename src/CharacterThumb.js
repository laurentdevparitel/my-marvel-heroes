import React from 'react';

import MarvelAPI from './MarvelAPI.js';

class CharacterThumb extends React.Component {
  constructor(props) {
    super(props);
    this.updateCharacterDetails = this.updateCharacterDetails.bind(this);
  }

  updateCharacterDetails(characterDetails) {
    //console.info('CharacterThumb.updateCharacterDetails', characterDetails);
    this.props.onUpdateCharacterDetails(characterDetails);
  }

  fetchCharacterDetails(e, characterId){
    //console.info('CharacterThumb.fetchCharacterDetails', characterId);

    const target = e.target;

    // Add spinner on characterThumb
    var li = target.parentNode.parentNode.nodeName.toUpperCase() === "LI" ? target.parentNode.parentNode:null;
    if (li){
      li.className = 'character loading';
    }

    // Fetch data API
    fetch(MarvelAPI.getCharacterDetailsURI(characterId))
		.then(res => res.json())
		.then(json => {
      console.info('JSON', json);

      // Remove spinner on characterThumb
      if (li){
        li.className = 'character';
      }

      // Update characterDetails
      this.updateCharacterDetails(json.data.results[0]);
		})
		.catch(err => {
			console.error('Error happened during fetching!', err);
		});
  }

  render(){
    return (
      <li className="character" onClick={(e) => this.fetchCharacterDetails(e, this.props.id)}>
        <section>
          <h3>{this.props.name}</h3>
          <img src={this.props.url} alt={this.props.name} />
        </section>
      </li>
    )
  }
}

export default CharacterThumb;
