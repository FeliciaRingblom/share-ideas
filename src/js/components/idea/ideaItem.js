import React from 'react';

class IdeaItem extends React.Component {
  render() {
    return (
      <div clasName="idea-container">
        <h3 className="idea-heading">{this.props.heading}</h3>
        <p className="idea-desc">{this.props.desc}</p>
        <p className="idea-added-date">{this.props.added}</p>
        <button type="button">Like</button>
        <button type="button">Dislike</button>
        <ul className="idea-tag-list">
          <li>Tech</li>
          <li>App</li>
        </ul>
      </div>
    );
  }
}

IdeaItem.propTypes = {
  heading: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired,
  added: React.PropTypes.string.isRequired,
};

export default IdeaItem;
