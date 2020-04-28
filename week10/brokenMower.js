/* a reworking attempt of php based challenge of 'one man went to mow, went to mow a meadow'   */

(function brokenLawn(){

  const array = ["one", "two", "three", "four",
  "five", "six", "seven", "eight",
  "nine", "ten"];

  for (var i = 0 ; i < 10; i++) {
    if (i === 0) {
      console.log("one man");
    }
    else {
      console.log( `${array[i]} ` + " men");
      // prompt(`${array[i]} ` + " men")
    }
    // console.log( "went to mow, went to mow a meadow ");
    for (var t = i ; t > 0; t--) {
      console.log( `${array[t]} ` + " men");
      // prompt(`${array[t]} ` + " men")
    }
    if (array.length != -1) {
      console.log("\n") ;
    }
    console.log( "went to mow, went to mow a meadow ");
    // prompt( "went to mow, went to mow a meadow ")
    console.log("one man and his dog went to mow a meadow\n\n");
    // prompt("one man and his dog went to mow a meadow\n\n")
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
  })()
  //
