import {register} from '../dispatcher';
import ActionTypes from '../constants/actionTypes';
import { EventEmitter } from 'events';
import IdeaAPI from '../api/IdeaAPI';

const CHANGE_EVENT = 'change';

const IdeaStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit( CHANGE_EVENT );
  },

  addChangeListener( callback ) {
    this.on( CHANGE_EVENT, callback );
  },

  removeChangeListener( callback ) {
    this.removeListener( CHANGE_EVENT, callback );
  },

  getIdeas() {
    return IdeaAPI.ideaItems;
  },

  dispatcherIndex: register( function( action ) {
    switch (action.actionType) {
    case ActionTypes.ADD_IDEA:
      IdeaAPI.addItem( action.item );
      break;
    case ActionTypes.REMOVE_IDEA:
      IdeaAPI.removeItem( action.item );
      break;
    default:
      break;
    }

    IdeaStore.emitChange();
  })
});

export default IdeaStore;
