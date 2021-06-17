const axios = require("axios").default;

const getMovie = async () => {
  try {
    const input = window.prompt("Enter Movie!");
    return await axios.get(
      "https://www.omdbapi.com/?t=" +
        input.replaceAll(" ", "+") +
        "&apikey=15d514d0&plot=full"
    );
  } catch (error) {
    console.error(error);
  }
};

const countBreeds = async () => {
  const breeds = await getMovie();
  if (breeds != null) {
    console.log(breeds.data.Title);
    document.getElementById("app").innerHTML =
      "<h1>" +
      breeds.data.Title +
      "</h1> <h2>" +
      breeds.data.Year +
      "</h2> <h3>" +
      breeds.data.Director +
      "</h3> <p>" +
      breeds.data.Plot +
      "</p>";
    document.getElementById("app3").innerHTML =
      "<img src=" + breeds.data.Poster + "></img>";
  }
};
countBreeds();
