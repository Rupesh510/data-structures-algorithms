/**
 * Context vs Scope in JavaScript
 */

{
  const object1 = {
    a: function () {
      console.log(this);
    },
  };

  console.log("object1.a:", object1.a);
}
