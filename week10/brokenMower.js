/* a rework of php version in javascript and java of 'one man went to mow, went to mow a meadow'   */

(function brokenLawn(){

  const array = ["one", "two", "three", "four",
  "five", "six", "seven", "eight",
  "nine", "ten"];

  for (var i = 0 ; i < 10; i++) {
    if (i === 0) {
      console.log("one man "
      + "went to mow, went to mow a meadow");
    }
    else {
      console.log( `${array[i]} ` + " men"
      +" went to mow, went to mow a meadow ");
    }
    for (var t = i ; t > 0; t--) {
      console.log( `${array[t]} ` + " men ");

    }
    if (array.length != -1) {
    }
    console.log("one man and his dog went to mow a meadow\n");
  }

  console.log()
  console.log("****** One man went to mow ******");
  for (var man = 1; man<=10; man++){
    console.log(man +
      " men went to mow, went to mow a meadow,");
      for (var companions = man; companions >=2; companions --)
      console.log(companions + " men, ");
      console.log("1 man and his dog, " +
      "went to mow a meadow. ");
      console.log("\n");
    }
  })();
//to run from terminal: node brokenMower.js
