const express = require('express');
const OngController = require('./controller/OngController');
const IncidenteController = require('./controller/IncidenteController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');


const routes = express.Router();


routes.post('/sessions', SessionController.create);



routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidenteController.create);
routes.delete('/incidents/:id', IncidenteController.delete);
routes.get('/incidents/', IncidenteController.index);



module.exports = routes;