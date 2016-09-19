import Ember from 'ember';

export default Ember.Component.extend({
  isValid: Ember.computed.notEmpty('model.name'),
  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then((friend) => {
          return this.save(friend);
        }, () => {
          this.set('errorMessage', 'there was something wrong with saving this model');
        });
      } else {
        this.set('errorMessage', 'You have to fill in all of the fields.');
      }
    },
    cancel() {
      this.cancel(this.get('model'));
    }
  }
});
