const button = document.querySelector(".container button");
const jokeText = document.querySelector(".container p");
document.addEventListener("DOMContentLoaded", getNewJoke);
button.addEventListener("click", getNewJoke);

reactionArray = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * reactionArray.length);
  const randomImage = reactionArray[randomIndex];
  const reactionImages = (document.getElementById(
    "reactions"
  ).src = `./img/${randomImage}`);
}

async function getNewJoke() {
  const fetchJoke = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const jokeResponse = await fetchJoke.json();
  jokeText.innerHTML = jokeResponse.joke;
  getRandomImage();
}
