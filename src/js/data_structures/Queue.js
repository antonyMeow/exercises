class Queue 
{
  #elements = [];

  constructor (...elements) { this.#elements = elements; }

  enqueue (elem) { this.#elements.push(elem); }

  dequeue () { return this.#elements.shift(); }

  getHead () { return this.#elements[0]; }

  getTail () { return this.#elements[this.#elements.length - 1]; }

  getSize () { return this.#elements.length; }

  isEmpty () { return !this.#elements.length; }

  toString () { return this.#elements.join(", "); }
} 
