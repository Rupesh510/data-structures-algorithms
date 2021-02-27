/**
 * Reverse a String
 * Create a function that reverses a String
 */

{
  function reverse(str) {
    if (!str || str.length < 2 || typeof str !== "string") {
      return str;
    }

    const backwards = [];
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i -= 1) {
      backwards.push(str[i]);
    }

    console.log({ backwards });

    return backwards.join("");
  }

  console.log(
    `reverse("Hi, My Name is Harry Manchanda"):`,
    reverse("Hi, My Name is Harry Manchanda"),
  ); // adnahcnaM yrraH si emaN yM ,iH
}

console.log("\n================================\n");

{
  function reverse(str) {
    if (!str || str.length < 2 || typeof str !== "string") {
      return str;
    }

    return str.split("").reverse().join("");
  }

  console.log(
    `reverse("Hi, My Name is Harry Manchanda"):`,
    reverse("Hi, My Name is Harry Manchanda"),
  ); // adnahcnaM yrraH si emaN yM ,iH
}

console.log("\n================================\n");

{
  function reverse(str) {
    if (!str || str.length < 2 || typeof str !== "string") {
      return str;
    }

    return [...str].reverse().join("");
  }

  console.log(
    `reverse("Hi, My Name is Harry Manchanda"):`,
    reverse("Hi, My Name is Harry Manchanda"),
  ); // adnahcnaM yrraH si emaN yM ,iH
}
