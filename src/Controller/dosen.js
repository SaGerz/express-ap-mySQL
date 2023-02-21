const db = require('../Connection/Connection');
const response = require('../Models/response')

const getAllDataDosen = (req, res) => {
    const sql = 'SELECT * FROM dosen';
    db.query(sql, (error, result) => {
      response(200, result, "Get All data from Dosen", res);
    })
}

const findDosen = (req, res) => {
    const nip = req.params.nip;
    const sql = `SELECT nama, mataKuliah FROM dosen WHERE nip=${nip}`;

    console.log(nip);
    db.query(sql, (error, result) => {
        if(error) response(404, "", "DATA NOT FOUND", res);
        const check = (result.length == 0) ? 
        response(404, "", "DATA NOT FOUND", res) : response(200, result, "GET nama dosen from nip", res);
        return check;
    })
}

const createDBDosen = (req, res) => {
    const {nama, nip, mataKuliah} = req.body;
    const sql = `INSERT INTO dosen(nama, nip, mataKuliah) VALUES('${nama}',${nip},'${mataKuliah}')`;

    db.query(sql, (error, result) => {
        if(error) response(500, "", "BAD INTERNAL SERVER", res);
        if(result?.affectedRows){
            const datas = {
                isSucces: result.affectedRows,
                insertid: result.insertId
            }
            response(200, datas, "Added Data Succesfully", res);
        }
    })
}

const updateDBDosen = (req, res) => {
    const {nama, nip, mataKuliah} = req.body;
    const sql = `UPDATE dosen SET nama='${nama}', nip=${nip}, mataKuliah='${mataKuliah}' WHERE nip=${nip}`;

    db.query(sql, (error, result) => {
        if(error) response(500, "", "BAD INTERNAL SERVER", res);
        if(result?.affectedRows){
            const datas = {
                isSucces: result.affectedRows,
                message: result.message
            }
            response(200, datas, "Updated Data Succesfully", res);
        }
    })
}

const deletedDBDosen = (req, res) => {
    const nip = req.params.nip;
    const sql = `DELETE FROM dosen WHERE nip=${nip}`;

    console.log(nip);
    db.query(sql, (error, result) => {
       if(error) response(500, "", "BAD INTERNAL SERVER", res);
       if(result?.affectedRows){
        const data =  {
            isSucces: result.affectedRows
        } 
        response(200, data, "Deleted Data Succesfully", res);
       } else {
        response(404, "", "DATA NOT FOUND", res);
       }
    })
}


module.exports = {
    getAllDataDosen,
    findDosen,
    createDBDosen,
    updateDBDosen,
    deletedDBDosen
}