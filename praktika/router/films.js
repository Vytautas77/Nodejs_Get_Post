const express = require("express");
const router = express.Router();
const {
  ADD_FILM,
  FILS_RECOMEND,
  SET_FILM_DONE,
  FIND_FILM_BY_ID,
} = require("../controller/films");

router.post("/addFilm", ADD_FILM);

router.get("/filmsRecomend", FILS_RECOMEND);

router.get("/findFilmByID/:id", FIND_FILM_BY_ID);

router.get("/setFilmDone/:id", SET_FILM_DONE);

module.exports = router;
