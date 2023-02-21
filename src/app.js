require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();

const response = require("./Models/response");

const bodyParser = require("body-parser");

const mahasiswaRouters = require("./Routes/mahasiswa");
const dosenRouters = require("./Routes/dosen");
const db = require("./Connection/Connection");

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  try {
    const sql = `SHOW TABLE STATUS FROM SIAKAD`;
    db.query(sql, (error, result) => {
      if (error) response(500, "", "BAD INTERNAL SERVER", res);
      response(200, result, "API Ready to Use!!!", res);
    });
  } catch (error) {
    response(500, "", error, res);
  }
});

app.use("/mahasiswa", mahasiswaRouters);
app.use("/mahasiswa/find/:npm", mahasiswaRouters);

app.use("/dosen", dosenRouters);
app.use("/dosen/find/:nip", dosenRouters);

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>Oppps.... Pages NOt FounD</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
