import React from 'react';
import IdeaItem from './ideaItem';
import IdeaStore from '../../stores/ideaStore';

const getIdeas = () => {
  return { ideas: IdeaStore.getIdeas() };
};

export default class IdeaList extends React.Component {
  constructor() {
    super();
    this.state = getIdeas();
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount() {
    IdeaStore.addChangeListener( this._onChange );
  }
  componentWillUnmount() {
    IdeaStore.removeChangeListener( this._onChange );
  }
  _onChange() {
    this.setState( getIdeas );
  }
  render() {
    const ideaItems = this.state.ideas.map( item => {
      return (<IdeaItem
        key={ item.id }
        item={ item }
        />);
    });
    return (
      <div className="row">
        { ideaItems }
      </div>
    );
  }
}

export default IdeaList;
