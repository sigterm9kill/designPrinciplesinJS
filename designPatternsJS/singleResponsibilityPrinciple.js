// single responsibility principle

const fs = require('fs');

/* Example of grouping functionality by class using the first
principle of SOLID design principle: Single Responsibility Principle */

// Class 1
class Journal {
    constructor() {
        this.entries = {};
    }
    addEntry(text) {
        let c = ++Journal.count;
        let entry = `${c}: ${text}`;
        this.entries[ c ] = entry; 
        return c; 
    }

    removeEntry(index) {
        delete this.entries[ index ];
    }
    toString() {
        return Object.values(this.entries).join('\n');
    }
    save(filename) {
        fs.writeFileSync(filename, this.toString());
    }
/*     load(filename) {
        // Example, not implemented
    }

    loadFromUrl(url) {
        // Example, not implemented
    } */
}
Journal.count = 0; 

// Class 2
class PersistienceManager {
    preprocess(j) {
        // Example, not implemented
    }

    saveToFile(journal, filename) {
        fs.writeFileSync(filename, journal.toString());
    }
}

let j = new Journal(); 
j.addEntry('I cried today.');
j.addEntry('I ate a bug.');
console.log(j.toString());

let p = new PersistienceManager(); 
let filename = './temp/journal.txt';
p.saveToFile(j, filename);

// seperation of concerns.