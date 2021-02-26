/**
 * Instantiation in JavaScript
 */

{
  class Player {
    constructor(name, type) {
      console.log("this player:", this);
      this.name = name;
      this.type = type;
    }

    introduce() {
      return `Hi I am ${this.name} and I am a ${this.type}`;
    }
  }

  class Wizard extends Player {
    constructor(name, type) {
      super(name, type);
      console.log("this wizard:", this);
    }

    play() {
      return `Wee... I am a ${this.type}`;
    }
  }

  const wizard1 = new Wizard("Shelly", "Healer");
  const wizard2 = new Wizard("Shawn", "Dark Magic");

  const wizard1Play = wizard1.play();
  console.log("wizard1Play:", wizard1Play);

  const wizard1Introduce = wizard1.introduce();
  console.log("wizard1Introduce:", wizard1Introduce);

  const wizard2Play = wizard2.play();
  console.log("wizard2Play:", wizard2Play);

  const wizard2Introduce = wizard2.introduce();
  console.log("wizard2Introduce:", wizard2Introduce);
}
