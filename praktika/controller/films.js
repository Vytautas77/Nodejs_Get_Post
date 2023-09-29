const { v4: uuidv4 } = require("uuid");
const filmsRecomends = [];

const ADD_FILM = (req, res) => {
  const addfilm = {
    id: uuidv4(),
    title: req.body.title,
    raiting: req.body.raiting,
    description: req.body.description,
    imbLink: req.body.imbLink,
    watched: false,
  };

  const existingFim = filmsRecomends.find((film) => film.id === addfilm.id);
  if (existingFim) {
    res.status(400).json({ response: "Film with the same ID already exists" });
  } else {
    filmsRecomends.push(addfilm);
    filmsRecomends.sort((a, b) => {
      return a.raiting < b.raiting ? 1 : -1;
    });
    return res.status(201).json({ response: "Film was added" });
  }
};

const FILS_RECOMEND = (req, res) => {
  return res.send(filmsRecomends);
};

const FIND_FILM_BY_ID = (req, res) => {
  console.log(filmsRecomends);
  console.log(req.params.id);
  const film = filmsRecomends.find((f) => f.id === req.params.id);
  console.log(film);
  if (!film) {
    return res.status(404).json({ response: "Film not found" });
  }
  return res.json({ response: film });
};

const SET_FILM_DONE = (req, res) => {
  const filmIndex = filmsRecomends.findIndex((film) => {
    return film.id === req.params.id;
  });
  if (filmIndex === -1) {
    return res.status(404).json({ response: "Film not found" });
  }
  filmsRecomends[filmIndex].watched = true;
  return res.json({ response: filmsRecomends });
};

module.exports = { ADD_FILM, FILS_RECOMEND, FIND_FILM_BY_ID, SET_FILM_DONE };
