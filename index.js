import { prompt } from "./prompt.js";

const guessTheNumber = () => {

  const MIN_NUMBER = 0
  const MAX_NUMBER = 1000;

  let replay = "O";


    const isValidNumber = (message) => {
    const input = Number(prompt(message));
    if (!Number.isNaN(input) && input >= MIN_NUMBER && input <= MAX_NUMBER) {
      return input;
    }
    return isValidNumber(message);
  }

  const play = () => {
    const targetNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER)) + MIN_NUMBER;

    const nbTry = game(targetNumber);

    console.log(`Gagné en ${nbTry} essai`);
  }

  const game = (targetNumber) => {
    const palyerInput = isValidNumber(`Saisir un nombre entre ${MIN_NUMBER} et ${MAX_NUMBER} :`);

    if (targetNumber === palyerInput) {
      return 1;
    }
    console.log(palyerInput > targetNumber ? "Le nombre à trouver est plus petit" : "Le nombre à trouver est plus grand");
    return 1 + game(targetNumber);
  }

  while (replay !== "N") {
    if (replay === "O") {
      console.log("********************************");
      console.log("***        GAME START        ***");
      console.log("********************************");
      play();
    }
    replay = prompt("Voulez-vous rejouer (O/N) ?").toUpperCase();
  }
  console.log("A bientôt");

};

guessTheNumber();