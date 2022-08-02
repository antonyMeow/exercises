package src;

public class Vector
{
  private final double _x;
  private final double _y;
  private final double _z;
  private final double _length;
  
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
      this._x = x;
      this._y = y;
      this._z = z;

      this._length = countLength();
  }

  private double countLength () { 
    return (double) Math.sqrt(_x * _x + _y * _y + _z * _z);
  }

  public double scalarMultiply (Vector another) 
  {
    double newX = this._x * another.getX();
    double newY = this._y * another.getY();
    double newZ = this._z * another.getZ();

    return newX + newY + newZ;
  }

  public double scalarSquare () 
  {
    return this.scalarMultiply(this);
  }

  public Vector vectorMultiply (Vector another) 
  {
    double newX = this._y * another.getZ() - another.getZ() * this._y;
    double newY = this._z * another.getX() - another.getX() * this._z;
    double newZ = this._x * another.getY() - another.getY() * this._x;

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
    double lengthMultiplication = this._length * another.getLength();

    return scalarMultiplication / lengthMultiplication;
  }

  public Vector add (Vector another) 
  {
    double newX = this._x + another.getX();
    double newY = this._y + another.getY();
    double newZ = this._z + another.getZ();

    return new Vector(newX, newY, newZ);
  }

  public Vector addNumber (double n) 
  {
    double newX = this._x * n;
    double newY = this._y * n;
    double newZ = this._z * n;
    
    return new Vector (newX, newY, newZ);
  }

  public Vector subtract (Vector another)
  {
    double newX = this._x - another.getX();
    double newY = this._y - another.getY();
    double newZ = this._z - another.getZ();

    return new Vector(newX, newY, newZ);
  }

  public double sumModulus (Vector another)
  {
    double a = this.scalarSquare();
    double b = another.scalarSquare();
    double c = 2 * this._length * another.getLength() * this.cos(another);

    return a + b + c;
  }

  public double subtractModulus (Vector another)
  {
    double a = this.scalarSquare();
    double b = another.scalarSquare();
    double c = 2 * this._length * another.getLength() * this.cos(another);

    return a + b - c;
  }

  public double getLength () { return this._length; }

  public double getX () { return this._x; }
  
  public double getY () { return this._y; }
  
  public double getZ () { return this._z; }

  @Override
  public String toString () 
  {
    return "( " + this._x + ", " + this._y + ", " + this._z + " )";
  }
}