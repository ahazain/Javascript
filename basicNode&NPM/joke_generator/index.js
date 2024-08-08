const jokes = require("give-me-a-joke");
const color = require("chalk-rainbow");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "kambing berbadan besar",
    e: "o0",
    T: "V",
  })
);

jokes.getRandomDadJoke(function (joke) {
  console.log(color("Dad joke: " + joke));
});
