// Open Closed Principle

let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue'
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large'
});

class Product {
    constructor(name, color, size) {
        this.name = name; 
        this.color = color; 
        this.size = size; 
    }
}

// Filter products out be criteria

class ProductFilter {
    // method filter by color
    filterByColor(products, color) {
        return products.filter(p => p.color === color);
    }

    // this leads to a "state space explosion" => which leads to the specification pattern

    // method filter by size
    filterBySize(products, size) {
        return products.filter(p => p.size === size);
    }
    // method filter by size and color
    filterBySizeAndColor(products, size, color) {
        return products.filter(p => p.size === size && p.color === p.color);
    }
}

// The right way: 
// specification pattern, in this case each specification request gets its own class
class ColorSpecification {
    constructor(color) {
        this.color = color; 
    }
    // method
    isSatisfied(item) {

        return item.color === this.color;
    }
}

class SizeSpecification {
    constructor(size) {
        this.size = size; 
    }
    // method
    isSatisfied(item) {
        return item.size === this.size;
    }
}
/* Now all filters are modular and discrete from all other filter classes, 
but can still do better */

class BetterFilter{
    // checking spec against every item
    filter(items, spec) {
        return items.filter(x => spec.isSatisfied(x))
    }
}

// products

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large); 
let house = new Product('House', Color.blue, Size.large);

let products = [ apple, tree, house ];

// must be able to access 'products' after initialization
let pf = new ProductFilter(); 
console.log(`Green products (old way):`);
for (let p of pf.filterByColor(products, Color.green)) {
    console.log(` * ${p.name} `);
}

let bf = new BetterFilter(); 
console.log(`Green products (new way): `);
for (let p of bf.filter(products,
    new ColorSpecification(Color.green))) {
    console.log(` * ${p.name} is green`);
} // great, now what if we need to combine classes? Build a combinator

class AndSpecification {
    constructor(...specs) {
        this.specs = specs; 
    }
    isSatisfied(item) {
        return this.specs.every(x => x.isSatisfied(item)); 
    }
}

console.log(`Large and green products: `);
let spec = new AndSpecification(
    new ColorSpecification(Color.green),
    new SizeSpecification(Size.large)
);

for (let p of bf.filter(products, spec)) {
    console.log(` * ${p.name} is large and green`);
}

// can do the same for an or or an XOR specification using this inheritance methodology

/* The open closed principle means that classes are open for extension
but closed for modification */

/* This means that you should not go back into the class with and start 
adding functions based on new requirements. This should be approached by inheritance,
which is what I did by adding the new function filterBySize and filterBySizeAndColor 
to the class ProductFilter, etc */

//no real need for a base class as in other languages
// i.e., 'extends Specification'... 
/* class Specification {
    constructor() {
        if (this.constructor.name === 'Specification') {
            throw new Error('Specification is abstract!')
        }
    }
    isSatisfied(item) { }
}
 */

