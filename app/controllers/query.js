import Ember from 'ember';
export default Ember.ObjectController({
  elapsedClass: (function() {
    var elapsed;
    elapsed = this.get('content.elapsed');
    if (elapsed >= 10.0) {
      return "warn_long";
    }
    if (elapsed >= 1.0) {
      return "warn";
    }
    return "short";
  }).property('content.elapsed'),
  vacuum: (function() {
    var query;
    query = this.get('query').toLowerCase();
    return query.indexOf('vacuum') > -1 || query.indexOf('reorg') > -1;
  }).property('content.query'),
  idle: (function() {
    return this.get('query').indexOf('<IDLE>') > -1;
  }).property('content.query')
});