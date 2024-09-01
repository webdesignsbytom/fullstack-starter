# C#

```c#
public class ExampleClass
{
    public string PublicProperty { get; set; } // Accessible from outside the class
    private string PrivateProperty { get; set; } // Accessible only within this class
    protected string ProtectedProperty { get; set; } // Accessible within this class and derived classes
    internal string InternalProperty { get; set; } // Accessible within the same assembly
    protected internal string ProtectedInternalProperty { get; set; } // Accessible within the same assembly or derived classes
    private protected string PrivateProtectedProperty { get; set; } // Accessible within this class and derived classes in the same assembly
}
```

## Naming Conventions

In C#, naming conventions are important for readability and maintaining a consistent code style.

a. Pascal Case (Uppercase first letter)
Pascal Case is used for naming:

Public properties
Methods
Classes
Constants

```c#
public class Person
{
    public string FirstName { get; set; } // Public property in PascalCase
    public string LastName { get; set; } // Public property in PascalCase

    public void PrintName() // Public method in PascalCase
    {
        Console.WriteLine($"{FirstName} {LastName}");
    }
}

```

b. Camel Case (Lowercase first letter)
Camel Case is typically used for:

Private fields (when not using an underscore)
Local variables
Method parameters

```c#
public class Person
{
    private string firstName; // Private field in camelCase
    private string lastName; // Private field in camelCase

    public Person(string firstName, string lastName) // Parameters in camelCase
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public void PrintName()
    {
        string fullName = $"{firstName} {lastName}"; // Local variable in camelCase
        Console.WriteLine(fullName);
    }
}
```

c. Underscore Prefix (\_)
The underscore prefix is often used in private fields or backing fields for properties, especially when there's a naming conflict or to distinguish private fields from public properties. It's also common in some coding standards to use this for private fields.

Example:

```c#
public class Person
{
    private string _firstName; // Private field with underscore
    private string _lastName; // Private field with underscore

    public string FirstName // Public property in PascalCase
    {
        get { return _firstName; }
        set { _firstName = value; }
    }

    public string LastName // Public property in PascalCase
    {
        get { return _lastName; }
        set { _lastName = value; }
    }

    public void PrintName()
    {
        Console.WriteLine($"{FirstName} {LastName}");
    }
}
```

1. Public Properties
   Properties in C# are special class members that provide a flexible mechanism to read, write, or compute the values of private fields. They are typically used to encapsulate data, allowing controlled access to a class's fields.

Public Properties: These are accessible from outside the class in which they are defined. They usually have get and set accessors.

Here, Name is a public property that provides controlled access to the \_name field.

```c#
public class Person
{
    private string _name;

    public string Name // Public property
    {
        get { return _name; }
        set { _name = value; }
    }
}
```

1. Methods
   Methods are blocks of code that perform actions or computations. They can accept parameters, return values, and contain logic. Methods define the behavior of a class.

Public Methods: These are methods that can be called from outside the class. They define actions that an object of the class can perform.
In this example, Add is a public method that can be called to add two integers.

```c#
public class Calculator
{
    public int Add(int a, int b) // Public method
    {
        return a + b;
    }
}
```

. Classes
Classes are blueprints for creating objects. They encapsulate data for the object and methods to manipulate that data. A class can contain fields, properties, methods, and other members.

Public Classes: A public class can be instantiated and used by any other class in the same project or other projects (if they reference the containing assembly).
In this example, Car is a public class that can be instantiated as an object, and it contains properties and methods.

```c#
public class Car
{
    public string Make { get; set; }
    public string Model { get; set; }

    public void Drive() // Method within a class
    {
        Console.WriteLine("Driving the car...");
    }
}
```

4. Constants
   Constants are immutable values which are known at compile-time and do not change during the lifetime of the application. They are typically used for fixed values that are used throughout a program.

Public Constants: These are constants that are accessible from outside the class.

```c#
public class MathConstants
{
    public const double Pi = 3.14159; // Public constant
}
```

5. Strings
   Strings in C# are sequences of characters and are an instance of the System.String class. A string can be used as a variable (either a field, property, or local variable), as a constant, or as a parameter in methods.

A String as a Field/Property: When a string is used as a field or a property, it is part of the object's state.

A String as a Constant: A string can be defined as a constant if its value is fixed and does not change.

Example of String Usage:

```c#
public class Book
{
    public string Title { get; set; } // String as a property

    public const string Publisher = "OpenAI Press"; // String as a constant

    public void PrintTitle() // Method using string
    {
        string message = $"The title of the book is: {Title}"; // Local variable
        Console.WriteLine(message);
    }
}
```

## Getters and setters

Getters and setters in C# (and in many other object-oriented languages) are methods or properties that allow controlled access to the fields of a class. They are crucial for encapsulation, which is a core principle of object-oriented programming (OOP). Below are the main reasons why getters and setters are needed:

1. Encapsulation
   Encapsulation is the concept of bundling the data (fields) and the methods that operate on that data into a single unit, i.e., a class. Encapsulation also hides the internal implementation details of a class from the outside world. Getters and setters are used to control how external code interacts with the class's internal data.

Private Fields: By making fields private, you prevent direct access to them from outside the class.
Public Properties (Getters and Setters): These provide a controlled way of accessing or modifying the private fields.
Example:

```c#
public class Person
{
    private string name; // Private field

    public string Name // Public property (getter and setter)
    {
        get { return name; }
        set { name = value; }
    }
}
```

Here, the name field is private, and the Name property provides controlled access to it.

1. Data Validation
   Getters and setters allow you to add logic for validation before a field is set. This ensures that the object's state remains valid.

```c#
public class Person
{
    private int age;

    public int Age
    {
        get { return age; }
        set
        {
            if (value < 0 || value > 120) // Validation logic
            {
                throw new ArgumentOutOfRangeException("Age must be between 0 and 120.");
            }
            age = value;
        }
    }
}
```

In this example, the Age property ensures that the age field can only be set to a value between 0 and 120.

1. Read-Only or Write-Only Properties
   Getters and setters allow you to create properties that are read-only, write-only, or both. This is useful when you want to restrict the way data is accessed or modified.

Read-Only: Only a getter is provided.
Write-Only: Only a setter is provided.

```c#
public class BankAccount
{
    private double balance;

    public double Balance // Read-only property
    {
        get { return balance; }
    }

    public void Deposit(double amount) // Method to modify balance
    {
        if (amount > 0)
        {
            balance += amount;
        }
    }
}
```

In this example, Balance is a read-only property because there is no set accessor. The balance can only be modified via the Deposit method, which can include validation and logic.

1. Computed Properties
   Sometimes the value of a property is derived from other fields or properties. Getters allow you to compute the value of a property on the fly, rather than storing it directly.

```c#
public class Rectangle
{
    public double Width { get; set; }
    public double Height { get; set; }

    public double Area // Computed property
    {
        get { return Width * Height; }
    }
}
```

In this example, the Area property is computed based on the Width and Height properties, and it doesn’t need a setter because the value is derived.

1. Changing Internal Implementation Without Affecting External Code
   If you allow direct access to a field, changing how that field is stored or processed would require changes to every part of your code that accesses it. Using getters and setters allows you to change the internal implementation without affecting the code that uses the class.

```c#
public class Temperature
{
    private double celsius;

    public double Fahrenheit
    {
        get { return celsius * 9 / 5 + 32; }
        set { celsius = (value - 32) * 5 / 9; }
    }
}
```

In this example, the internal representation of temperature is in Celsius, but the external code can work with Fahrenheit through the Fahrenheit property. If you later decide to store temperature in Kelvin internally, you can change the getter and setter without impacting external code.

1. Consistency and Debugging
   Getters and setters can help ensure that data is accessed and modified consistently throughout your application. If you need to add logging, debugging, or modify behavior later, you can do so in one place (in the getter or setter) rather than tracking down every direct access to the field.

Summary

- Encapsulation: Protects the internal state of the object and provides controlled access.
- Data Validation: Ensures that data being set is valid.
- Read-Only/Write-Only Access: Controls how properties are accessed or modified.
- Computed Properties: Allows dynamic calculation of property values.
- Internal Implementation Flexibility: Allows changing internal details without affecting external code.
- Consistency and Debugging: Centralizes access to fields, making it easier to maintain and debug.
- In essence, getters and setters provide a powerful and flexible way to manage access to an object's data, ensuring that the object remains in a valid state and that changes to its internal workings don’t break external code.
