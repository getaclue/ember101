import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    backToIndex(friend) {
      this.transitionToRoute('loans.index', friend);
    }
  }
});
