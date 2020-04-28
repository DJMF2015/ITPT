
class mow {
/* The Song Printing program       by J M bishop   Aug 1996
   displays the "One man went to Mow" song
   Illustrates nested and backward counting for-loops */

  public static void main (String [] args) {

    System.out.println("****** One man went to mow ******");
    for (int man = 1; man<=10; man++){
      System.out.println(man +
		" men went to mow, went to mow a meadow,");
      for (int companions = man; companions >=2; companions --)
		System.out.print(companions + " men, ");
      System.out.println("1 man and his dog, " +
	        "went to mow a meadow. ");
      System.out.println();
    }
  }
}

