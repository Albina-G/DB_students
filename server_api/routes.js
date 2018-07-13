'use strict';

const { error404 } = require('./controllers/errors');
const {
    create,
    list,
    deleteItem
} = require('./controllers/options');

const url = '/api';

module.exports = (app, collection) => {
    app.get(url + '/students', (req, res) => list(req, res, collection));

    app.post(url + '/', (req, res) => create(req, res, collection));

    app.delete(url + '/:id', (req, res) => deleteItem(req, res, collection));

    app.all('*', error404);
};
