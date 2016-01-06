import React from 'react';
import IdeaActions from '../../actions/ideaActions';

require('../../../sass/_ideaItem.scss');

class IdeaItem extends React.Component {
  render() {
    return (
      <div className="idea-container col-sm-6 col-md-4 col-lg-3">
        <h3 className="idea-heading">{this.props.item.heading}</h3>
        <p className="idea-desc">{this.props.item.desc}</p>
        <p className="idea-added-date">{this.props.item.added}</p>
        <p className="">{this.props.item.points}</p>
        <button type="button" onClick={ IdeaActions.increasePoints.bind(null, this.props.item) }>Like</button>
        <button type="button" onClick={ IdeaActions.decreasePoints.bind(null, this.props.item) }>Dislike</button>
        <ul className="idea-tag-list">
          <li>Tech</li>
          <li>App</li>
        </ul>
      </div>
    );
  }
}

IdeaItem.propTypes = {
  item: React.PropTypes.object.isRequired,
};

export default IdeaItem;
