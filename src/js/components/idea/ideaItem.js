import React from 'react';

export default () => {
  return (
    <div clasName="idea-container">
      <h3 className="idea-heading">Idea heading</h3>
      <p className="idea-desc">Lorem ipsum...</p>
      <p className="idea-added-date">2015-10-10</p>
      <button type="button">Like</button>
      <button type="button">Dislike</button>
      <ul className="idea-tag-list">
        <li>Tech</li>
        <li>App</li>
      </ul>
    </div>
  );
};
