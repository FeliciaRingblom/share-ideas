const IdeaAPI = {
  ideaItems: [],
  removeIdeaItem( item ) {
    this.ideaItems.splice( this.ideaItems.findIndex( i => i === item ), 1 );
  },
  findIdeaItem( item ) {
    return this.ideaItems.find( ideaItem => ideaItem.id === item.id );
  },
  increasePoints( item ) { item.points++; },
  decreasePoints( item ) { item.points--; },
  addIdeaItem( item ) {
    const ideaItem = this.findIdeaItem( item );
    if ( !ideaItem ) {
      this.ideaItems.push( Object.assign( {qty: 1, id: 99}, item ) );
    }
  },
  init() {
    for ( let i = 1; i < 9; i++ ) {
      this.ideaItems.push( {
        'id': 'ID' + i,
        'heading': 'Idea #' + i,
        'desc': 'Lorem ipsum dolor sit amet.',
        'added': '2015-01-05',
        'points': 0
      } );
    }
  }
};

IdeaAPI.init();
export default IdeaAPI;
