class Stack 
{
  #elements = [];

  constructor (...elements) { this.#elements = elements; }

  push (elem) { this.#elements.push(elem); }

  pop () { return this.#elements.pop(); }

  peek () { return this.#elements[this.#elements.length - 1]; }

  getLength () { return this.#elements.length; }

  isEmpty () { return !this.length; } 

  toString () { return this.#elements.join(", "); }
}
