const express = require('express');
const app = express.Router();
const mahasiswaControler = require('../Controller/mahasiswa');

// Mahasiswa
app.get('/', mahasiswaControler.getDataMahasiswa);
app.get('/find/:npm', mahasiswaControler.findMahasiswa);
app.post('/', mahasiswaControler.createDBMahasiswa);
app.put('/', mahasiswaControler.updateDBMahasiswa);
app.delete('/:npm', mahasiswaControler.deleteDBMahasiswa);

// Mahasiswa End


module.exports = app;