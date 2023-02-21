const db  = require('../Connection/Connection');
const response = require('../Models/response');

const getDataMahasiswa = (req, res) => {
    const sql = 'SELECT * FROM MAHASISWA';
    db.query(sql, (error, result) =>{
      // console.log(result);
      response(200, result, "Get All Data from Databases", res);
    }) 
}

const findMahasiswa = (req, res) => {
  const npm = req.params.npm
  const sql = `SELECT nama FROM mahasiswa WHERE npm = ${npm}`;

  db.query(sql, (error, result) => {
    response(200, result, "Get Data nama from NPM", res);
  })
}

const createDBMahasiswa = (req, res) => {
  const {nama, npm, jurusan} = req.body;
  const sql = `INSERT INTO mahasiswa (nama, npm, jurusan) VALUES ('${nama}', ${npm}, '${jurusan}')`;

  db.query(sql, (error, result) => {
    if (error) response (500, "", "ERROR", res);
    if (result?.affectedRows) {
        const datas  = {
          isSucces: result.affectedRows,
          insertid: result.insertId
        }
        response(200, datas, "Added Data Succesfully", res);
    } 
  })
}

const updateDBMahasiswa = (req, res) => {
  const {nama, npm, jurusan} = req.body;
  const sql = `UPDATE mahasiswa SET nama='${nama}', jurusan='${jurusan}' WHERE npm = ${npm}`

  db.query(sql, (error, result) => {
    if(error) response(500, "", "INTERNAL SERVER ERROR", res);
    if(result?.affectedRows){
      const datas = {
        isSucces: result.affectedRows,
        message: result.message
      }
      response(200, datas, "Updated Data Succesfully", res);
    }
  })
}

const deleteDBMahasiswa = (req, res) => {
  const npm = req.params.npm;
  const sql = `DELETE FROM mahasiswa WHERE npm=${npm}`

  db.query(sql, (error, result) => {
    if(error) response(500, "", "BAD INTERNAL SERVER", res);
    if(result?.affectedRows){
      const datas = {
        isSucces: result.affectedRows,
        message: "Delete Succes"
      }
      response(200, datas, "Deleted Data Succesfully", res);
    } else {
      response(404, "", "DATA NOT FOUND", res);
    }
  })
}
module.exports = {
  getDataMahasiswa, 
  findMahasiswa,
  createDBMahasiswa,
  updateDBMahasiswa, 
  deleteDBMahasiswa
}