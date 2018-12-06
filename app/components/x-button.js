import Component from '@ember/component';

export default Component.extend({
  name: 'Ben',

  didReceiveAttrs() {
    this._super(...arguments);

    this.set('name', 'UPDATED');
  }
});
