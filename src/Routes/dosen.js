const express = require('express');
const app = express.Router();
const dosenControler = require('../Controller/dosen');

// Dosen
app.get('/', dosenControler.getAllDataDosen);
app.get('/find/:nip', dosenControler.findDosen);
app.post('/', dosenControler.createDBDosen);
app.put('/', dosenControler.updateDBDosen);
app.delete('/:nip', dosenControler.deletedDBDosen);

// Dosen end

module.exports = app;
