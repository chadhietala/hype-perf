import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  queriesCountLabelClass: (function() {
    var count;
    count = this.get('sample.queries.length');
    if (count >= 20) {
      return "label-important";
    }
    if (count >= 10) {
      return "label-warning";
    }
    return "label-success";
  }).property('sample.queries.@each')
});