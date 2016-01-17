import React from 'react';
import IdeaActions from '../../actions/ideaActions';
import { Link } from 'react-router';

require('../../../sass/_ideaItem.scss');

const IdeaItem = (props) => {
  return (
    <div className="idea-container col-sm-6 col-md-4 col-lg-3">
     <Link to={ `/idea/${props.item.id}` }>
      <h3 className="idea-heading">{props.item.heading}</h3>
     </Link>
      <p className="idea-desc">{props.item.description}</p>
      <p className="idea-added-date">{props.item.added}</p>
      <p className="">{props.item.points}</p>
      <button type="button" onClick={ IdeaActions.increasePoints.bind(null, props.item) }>Like</button>
      <button type="button" onClick={ IdeaActions.decreasePoints.bind(null, props.item) }>Dislike</button>
      <ul className="idea-tag-list">
        <li>Tech</li>
        <li>App</li>
      </ul>
    </div>
  );
};

IdeaItem.propTypes = {
  item: React.PropTypes.object.isRequired,
};

export default IdeaItem;
