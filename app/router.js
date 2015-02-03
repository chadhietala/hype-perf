import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('database', {
    path: '/dbs/:name'
  });
});

export default Router;
