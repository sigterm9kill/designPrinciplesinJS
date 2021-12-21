# designPrinciplesinJS
# currently in process, check back -- Dec 17 2021

Using SOLID, I am walking through principles and their violations in a js/node env.


from GoF, to be covered...

Creational Paterns:
Builder: When piecewise object construction is complicated, provied an API for doing it succintly, i.e., html tags upon tags.
    -Builder Facets (Using sub builders, all contributing to a base class builder for a single object with many different facets by using a fluent interface)
Factories: Object creation becomes too convoluted, Initializer is not descriptive: Name is always __init__, Cannot overload with the same arguments with different names, can turn into 'optional parameter hell'. The point is to be able to do wholesale object createion (non-piecewise, unlike Builder): Generally outsourced to =>
    -Abstract factories,
    -Factory method,
        Definition: A factory is a component that is responsible solely for the wholesale as opposed to the piecewise creation of objects.
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
