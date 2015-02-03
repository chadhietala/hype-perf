module.exports = function(app) {
  var express = require('express');
  var clustersRouter = express.Router();

  clustersRouter.get('/', function(req, res) {
    res.send({
      'clusters': [
        {
          id: 1,
          health: 5,
        }
      ]
    });
  });

  clustersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  clustersRouter.get('/:id', function(req, res) {
    res.send({
      'clusters': {
        id: req.params.id
      }
    });
  });

  clustersRouter.put('/:id', function(req, res) {
    res.send({
      'clusters': {
        id: req.params.id
      }
    });
  });

  clustersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/clusters', clustersRouter);
};
