import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  elapsedClass: (function() {
    var elapsed;
    elapsed = this.get('query.elapsed');
    if (elapsed >= 10.0) {
      return "warn_long";
    }
    if (elapsed >= 1.0) {
      return "warn";
    }
    return "short";
  }).property('query.elapsed'),

  vacuum: (function() {
    var query;
    query = this.get('query.query').toLowerCase();
    return query.indexOf('vacuum') > -1 || query.indexOf('reorg') > -1;
  }).property('query.query'),

  idle: (function() {
    return this.get('query.query').indexOf('<IDLE>') > -1;
  }).property('query.query')
});