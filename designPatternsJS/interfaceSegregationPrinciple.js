/* Interface Segregation Principle */

/* Javascript does not have interfaces. It uses duck typing so there isn't a huge reason
to have a type based interface. However...*/

/* the ISP says that you need to split up your interfaces.
Multiple inheritance isn't really a thing, so will need to use aggregation.

This principle is somewhat moot, but in order to understand what not to do; i.e., empty 
abstractions.
*/


var aggregation = (baseClass, ...mixins) => {
    class base extends baseClass {
      constructor (...args) {
        super(...args);
        mixins.forEach((mixin) => {
          copyProps(this,(new mixin));
        });
      }
    }
    let copyProps = (target, source) => {  // this function copies all properties and symbols, filtering out some special ones
      Object.getOwnPropertyNames(source)
        .concat(Object.getOwnPropertySymbols(source))
        .forEach((prop) => {
          if (!prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
        })
    };
    mixins.forEach((mixin) => {
      // outside constructor() to allow aggregation(A,B,C).staticFunction() to be called etc.
      copyProps(base.prototype, mixin.prototype);
      copyProps(base, mixin);
    });
    return base;
  };
  

  class Document {
  //
  }
  
  class Machine {
    constructor() {
      if (this.constructor.name === 'Machine')
        throw new Error('Machine is abstract!');
    }
  
    print(doc) {}
    fax(doc) {}
    scan(doc) {}
  }
  
  class MultiFunctionPrinter extends Machine {
    print(doc) {
        /* super.print(doc); */
    }
  
    fax(doc) {
        /* super.fax(doc); */
    }
  
    scan(doc) {
        /* super.scan(doc); */
    }
  }
  
  class NotImplementedError extends Error {
    constructor(name) {
      let msg = `${name} is not implemented!`;
      super(msg);
      // maintain proper stack trace
      if (Error.captureStackTrace)
        Error.captureStackTrace(this, NotImplementedError);
      // your custom stuff here :)
    }
  }
  

// version 1
  class OldFashionedPrinter extends Machine {
    print(doc) {
      // ok
    }
  
    // omitting this is the same as no-op impl
  
    // fax(doc) {
    // do nothing because it doesn't have this capability
    // }  this is an example of a violation of least surprise
  
    scan(doc) {
      // throw new Error('not implemented!');  a possibilty
      throw new NotImplementedError(
        'OldFashionedPrinter.scan')
    }
  }
  
  // solution
  class Printer {
    constructor()
    {
      if (this.constructor.name === 'Printer')
        throw new Error('Printer is abstract!');
    }
  
    print(){}
  }
  
  class Scanner {
    constructor() {
      if (this.constructor.name === 'Scanner')
        throw new Error('Scanner is abstract!');
    }
  
    scan(){}
  }
  
  class Photocopier extends aggregation(Printer, Scanner) {
    print()
    {
      // IDE won't help you here
    }
  
    scan() {
      //
    }
  }
  
  // we don't allow this!
  // let m = new Machine();
  
  let printer = new OldFashionedPrinter();
  printer.fax(); // nothing happens
  //printer.scan();