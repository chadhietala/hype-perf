import Ember from 'ember';
import database from '../models/database';

export default Ember.Route.extend({
  model: function() {
    return database.findAll();
  },
  activate: function() {
    database.loadLatest();
  }
});

