/* 
Dependency Inversion Principle

The dependency inversion has nothing to do with dependency injection.
the DIP defines the relationships between low and high level modules.

High level modules should not depend on low level modules, but should depend on 
abstractions.
*/


// example: relationship enumeration
let Relationship = Object.freeze({
    parent: 0,
    child: 1,
    sibling: 2
  });
  
  // keep it simple, just use a name
  class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  // LOW-LEVEL MODULE EXAMPLE => (STORAGE)
  
  class RelationshipBrowser {
    constructor() {
      if (this.constructor.name === 'RelationshipBrowser')
        throw new Error('RelationshipBrowser is abstract!');
    }
  
    findAllChildrenOf(name) {}
  }
  
  class Relationships extends RelationshipBrowser {
    constructor() {
      super();
      this.data = [];
    }
  
    addParentAndChild(parent, child) {
      this.data.push({
        from: parent,
        type: Relationship.parent,
        to: child
      });
      this.data.push({
        from: child,
        type: Relationship.child,
        to: parent
      });
    }
  
    findAllChildrenOf(name) {
      return this.data.filter(r =>
        r.from.name === name &&
        r.type === Relationship.parent
      ).map(r => r.to);  // now go to research component
    }
  }
  
  // HIGH-LEVEL (RESEARCH), like getting the data out of the low-level storage
  
  class Research {  // abstract classes/interfaces (not part of JS)
    // constructor(relationships) {
    //   // problem: direct dependence ↓↓↓↓ on storage mechanic
    //   let relations = relationships.data;
    //   for (let rel of relations.filter(r =>
    //     r.from.name === 'John' &&
    //     r.type === Relationship.parent
    //   )) {
    //     console.log(`John has a child named ${rel.to.name}`);
    //   }
    // }
      
      // try this, pretend an abstraction: see relationshipBrowser
  
    constructor(browser) {
      for (let p of browser.findAllChildrenOf('John'))
      {
        console.log(`John has a child named ${p.name}`);
      }// not accessing the storage functions
    }
  }
  
  let parent = new Person('John');
  let child1 = new Person('Chris');
  let child2 = new Person('Matt');
  
  // low-level module
  let rels = new Relationships();
  rels.addParentAndChild(parent, child1);
  rels.addParentAndChild(parent, child2);
  
new Research(rels); // call stays the same
  
/* High level modules should not be depending directly on low level modules and
should not be depending on any data that should be private.You are depending on 
abstractions. This is a limitation of JS (no abstractions), so now this is something 
that can be identified as something not to do. */  