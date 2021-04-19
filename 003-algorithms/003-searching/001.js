/**
 * Linear Search
 */

const beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];

console.log(`beasts.indexOf("Godzilla"):`, beasts.indexOf("Godzilla"));

console.log(
  `beasts.findIndex((item) => item === "Godzilla"):`,
  beasts.findIndex((item) => item === "Godzilla"),
);

console.log(
  `beasts.find((item) => item === "Godzilla"):`,
  beasts.find((item) => item === "Godzilla"),
);

console.log(`beasts.includes("Godzilla"):`, beasts.includes("Godzilla"));
