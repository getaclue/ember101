import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  articles: Ember.computed({
    get() {
      return this.get('store').findAll('article');
    }
  }).readOnly(),

  save() {
    this.get('model').save().then((model) => {
      this.back(model.get('friend'));
    }, () => {
      this.set(
        'errorMessage',
        'there was something wrong with the loan.'
      )
    });
  },

  cancel() {
    this.back(this.get('model.friend'));
  }
});
