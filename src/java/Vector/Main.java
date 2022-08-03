package src.java.Vector;

public class Main 
{
  public static void main (String[] args)
  {
    MyVector a = new MyVector(1d,2d,3d);
    MyVector b = new MyVector(4d,5d);
    MyVector c = new MyVector(6d);
    println("a: " + a);
    println("b: " + b);
    println("c: " + c);
    println("a.length: " + a.getLength());
    println("b.length: " + b.getLength());
    println("(a,b): " + a.scalarMultiply(b));
    println("[a,b]: " + a.vectorMultiply(b));
    println("(a,b,c): " + a.mixMultiply(b, c));
    println("cos(a,b): " + a.cos(b));
    println("a + b: " + a.add(b));
    println("a * 10: " + a.multiplyNum(10));
    println("a - b: " + a.subtract(b));
    println("|a + b|: " + a.sumModulus(b));
    println("|a - b|: " + a.subtractModulus(b));
  }

  private static void println (Object obj) { System.out.println(obj.toString()); }
}
