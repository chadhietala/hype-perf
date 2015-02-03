import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  topFiveQueries: (function() {
    var ary;
    ary = this.get('queries').slice(0, 5);
    while (ary.length < 5) {
      ary.push({
        query: ''
      });
    }
    return ary;
  }).property('queries.@each'),
  queriesCountLabelClass: (function() {
    var count;
    count = this.get('queries.length');
    if (count >= 20) {
      return "label-important";
    }
    if (count >= 10) {
      return "label-warning";
    }
    return "label-success";
  }).property('queries.@each')
})