const btn = document.getElementById("addFilm");
fetch("http://localhost:3000/filmsRecomend")
  .then((res) => {
    return res.json();
  })
  .then((secondRes) => {
    console.log(secondRes);
  });

const inputsInfo = () => {
  const InputTitle = document.getElementById("title").value;
  const inputRaiting = document.getElementById("raiting").value;
  const inputDescription = document.getElementById("description").value;
  const inputImbLink = document.getElementById("imbLink").value;

  const filmsRecomend = {
    title: InputTitle,
    raiting: inputRaiting,
    description: inputDescription,
    imbLink: inputImbLink,
  };
  return filmsRecomend;
};

btn.addEventListener("click", async () => {
  const inputFilm = inputsInfo();

  try {
    const responce = await fetch("http://localhost:3000/addFilm", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputFilm),
    });
    const data = await responce.json();
    const responseWrapper = document.getElementById("responseWrapper");
    if (data) {
      responseWrapper.innerHTML = "Duomenys įvesti sėkmingai.";
      setTimeout(() => {
        window.location.replace("./index.html");
      }, 3000);
    }
  } catch (err) {
    console.log("err", err);
    responseWrapper.innerHTML = "Duomenys įvesti NESĖKMINGAI.";
  }
});
