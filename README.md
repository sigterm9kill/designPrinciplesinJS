# designPrinciplesinJS
Using SOLID, I am walking through principles and their violations in a js/node env.


from GoF, to be covered...

Creational Paterns:
Builder,
Factories,
    -Abstract factories,
    -Factory method,
Protype,
Singleton

Structural Patterns:
Adapter,
Bridge,
Composite,
Decorator,
Fascade,
Flyweight,
Proxy

Behavioral Patterns: 
Chain of Responsibility,
Command,
Interpreter,
Iterator,
Mediator,
Memento,
Observer,
State,
Strategy,
Template Method,
Visitor

The SOLID principles:  

Single-responsibility Principle (SRP) states:
A class should have one and only one reason to change, meaning that a class should have only one job.

Open-closed Principle (OCP) states:
Objects or entities should be open for extension but closed for modification. This means that a class should be extendable without modifying the class itself.

Liskov Substitution Principle s
For Example, Let q(x) be a property provable about objects of x of type T. Then q(y) should be provable for objects y of type S where S is a subtype of T. This means that every subclass or derived class should be substitutable for their base or parent class.

Interface segregation principle states:
A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use. 

Dependency inversion principle states:
Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.
