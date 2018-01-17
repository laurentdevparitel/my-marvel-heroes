import React from 'react';

import SkyLight from 'react-skylight';

import CharacterThumb from './CharacterThumb.js';
import CharacterContent from './CharacterContent.js';

const dialogStyles = {
  width: '70%',
  height: '600px',
  marginTop: '-300px',
  marginLeft: '-35%',
};

class Characters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modalBoxTitle: "Fiche d'identité",
        characterDetails: {}
    }
    this.handleUpdateCharacterDetails = this.handleUpdateCharacterDetails.bind(this);
  }

  handleUpdateCharacterDetails(characterDetails){
    //console.info('Characters.handleUpdateCharacterDetails() ',characterDetails);
    this.setState({
      characterDetails: characterDetails
    });

     // Open modal box
     const modalBox = this.refs.modalBox
     modalBox.show();
  }

	render() {
		//console.log('Characters.render: ', this.props.data);

		let characterThumbs = this.props.data.map(character => <CharacterThumb
			url={character.thumbnail.path+"."+character.thumbnail.extension}
			name={character.name}
			id={character.id}
			key={character.id}
      onUpdateCharacterDetails={this.handleUpdateCharacterDetails} />);

    return (
      <div>
  			<ul className="characters">
  				{characterThumbs}
  			</ul>
        <SkyLight ref="modalBox" dialogStyles={dialogStyles} hideOnOverlayClicked={true} title={this.state.modalBoxTitle}>
          <CharacterContent data={this.state.characterDetails} />
        </SkyLight>
      </div>
		);
	}
}

export default Characters;
