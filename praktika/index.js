const express = require("express");
const app = express();
const cors = require("cors");
const filmRouter = require("./router/films");

app.use(cors());
app.use(express.json());
require("dotenv").config();

app.use(filmRouter);

// app.delete("/delFilms", (req, res) => {
//   filmsRecomends = [];
//   return res.status(204).send();
// });

app.use((req, res) => {
  return res.status(404).json({ response: "Endpoint not exist!" });
});

// eslint-disable-next-line no-undef
app.listen(process.env.PORT, () =>
  // eslint-disable-next-line no-undef
  console.log(`APP ${process.env.PORT} start working`)
);
