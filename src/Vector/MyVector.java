package src.Vector;

public class MyVector
{
  private final double _x;
  private final double _y;
  private final double _z;
  private final double _length;
  
  public MyVector (double x) 
  { 
    this(x, 1, 1);
  }

  public MyVector (double x, double y) 
  { 
    this(x, y, 1);
  }

  public MyVector (double x, double y, double z)
  {
      this._x = x;
      this._y = y;
      this._z = z;

      this._length = countLength();
  }

  private double countLength () { 
    return Math.sqrt(_x * _x + _y * _y + _z * _z);
  }

  public double scalarMultiply (MyVector another) 
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

  public MyVector vectorMultiply (MyVector another) 
  {
    double newX = this._y * another.getZ() - this._z * another.getY();
    double newY = this._z * another.getX() - this._x * another.getZ();
    double newZ = this._x * another.getY() - this._y * another.getX();

    return new MyVector (newX, newY, newZ);
  }

  public double mixMultiply (MyVector second, MyVector third) 
  {
    MyVector vectorMultiplication = second.vectorMultiply(third);

    return this.scalarMultiply(vectorMultiplication);
  } 

  public double cos (MyVector another)
  {
    double scalarMultiplication = this.scalarMultiply(another);
    double lengthMultiplication = this._length * another.getLength();

    return scalarMultiplication / lengthMultiplication;
  }

  public MyVector add (MyVector another) 
  {
    double newX = this._x + another.getX();
    double newY = this._y + another.getY();
    double newZ = this._z + another.getZ();

    return new MyVector(newX, newY, newZ);
  }

  public MyVector multiplyNum (double n)
  {
    double newX = this._x * n;
    double newY = this._y * n;
    double newZ = this._z * n;
    
    return new MyVector (newX, newY, newZ);
  }

  public MyVector subtract (MyVector another)
  {
    double newX = this._x - another.getX();
    double newY = this._y - another.getY();
    double newZ = this._z - another.getZ();

    return new MyVector(newX, newY, newZ);
  }

  public double sumModulus (MyVector another)
  {
    double a = this.scalarSquare();
    double b = another.scalarSquare();
    double c = 2 * this._length * another.getLength() * this.cos(another);

    return a + b + c;
  }

  public double subtractModulus (MyVector another)
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