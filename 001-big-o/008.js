/**
 * Big O Rule 3: Different terms for Different Inputs
 */

{
  function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function (box) {
      console.log(box);
    });

    boxes2.forEach(function (box) {
      console.log(box);
    });
  }
}

// => O(n + m)
