import React from 'react';

class CharacterContent extends React.Component {

  render(){

    if (typeof(this.props.data) === "undefined" || !Object.keys(this.props.data).length){
      return null;
    }

    console.info('CharacterContent.render data:', this.props.data );
    var name = this.props.data.name;
    var description = this.props.data.description;
    var thumbnail = this.props.data.thumbnail.path +"."+ this.props.data.thumbnail.extension;

    var series = this.props.data.series.items.map((serie, index) => <li key={index}>{serie.name}</li>);
    var stories = this.props.data.stories.items.map((story, index) => <li key={index}>{story.name}</li>);

    return (
      <section className="characterContent">
        <div className="leftSide">
          <img src={thumbnail} alt={name} className="thumbnail" />
        </div>
        <div className="rightSide">
          <section className="detail">
            <h3>{name}</h3>
            <p>{description}</p>
          </section>

          <div className="scroller">
            <section className="detail">
              <h4>Comics</h4>
              <ul>{stories}</ul>
            </section>

            <section className="detail">
              <h4>Series</h4>
              <ul>{series}</ul>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default CharacterContent;
