//create a class defining the vector

public class Vector
{
  private final double x;
  private final double y;
  private final double z;
  private final double length;
  
  public Vector (double x) 
  { 
    this(x, 1, 1);
  }

  public Vector (double x, double y) 
  { 
    this(x, y, 1);
  }

  public Vector (double x, double y, double z)
  {
      this.x = x;
      this.y = y;
      this.z = z;

      this.length = countLength();
  }

  private double countLength () { 
    return (double) Math.sqrt(x * x + y * y + z * z);
  }

  public double scalarMultiply (Vector another) 
  {
    double newX = this.x * another.getX();
    double newY = this.y * another.getY();
    double newZ = this.z * another.getZ();

    return newX + newY + newZ;
  }

  public double scalarSquare () 
  {
    return this.scalarMultiply(this);
  }

  public Vector vectorMultiply (Vector another) 
  {
    double newX = this.y * another.getZ() - another.getZ() * this.y;
    double newY = this.z * another.getX() - another.getX() * this.z;
    double newZ = this.x * another.getY() - another.getY() * this.x;

    return new Vector (newX, newY, newZ);
  }

  public double mixMultiply (Vector second, Vector third) 
  {
    Vector vectorMultiplication = second.vectorMultiply(third);

    return this.scalarMultiply(vectorMultiplication);
  } 

  public double cos (Vector another)
  {
    double scalarMultiplication = this.scalarMultiply(another);
    double lengthMultiplication = this.length * another.getLength();

    return scalarMultiplication / lengthMultiplication;
  }

  public Vector add (Vector another) 
  {
    double newX = this.x + another.getX();
    double newY = this.y + another.getY();
    double newZ = this.z + another.getZ();

    return new Vector(newX, newY, newZ);
  }

  public Vector addNumber (double n) 
  {
    double newX = this.x * n;
    double newY = this.y * n;
    double newZ = this.z * n;
    
    return new Vector (newX, newY, newZ);
  }

  public Vector subtract (Vector another)
  {
    double newX = this.x - another.getX();
    double newY = this.y - another.getY();
    double newZ = this.z - another.getZ();

    return new Vector(newX, newY, newZ);
  }

  public double sumModulus (Vector another)
  {
    double a = this.scalarSquare();
    double b = another.scalarSquare();
    double c = 2 * this.length * another.getLength() * this.cos(another);

    return a + b + c;
  }

  public double subtractModulus (Vector another)
  {
    double a = this.scalarSquare();
    double b = another.scalarSquare();
    double c = 2 * this.length * another.getLength() * this.cos(another);

    return a + b - c;
  }

  public double getLength () { return this.length; }

  public double getX () { return this.x; }
  
  public double getY () { return this.y; }
  
  public double getZ () { return this.z; }

  @Override
  public String toString () 
  {
    return "( " + this.x + ", " + this.y + ", " + this.z + " )";
  }
}