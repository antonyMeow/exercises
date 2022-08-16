class Node 
{
  #elem = null;
  #next = null;

  constructor (elem) 
  {
    this.#elem = elem;
  }

  setNext (next) { this.#next = next; }
  hasNext () { return !!this.#next; }
  getNext () { return this.#next; }
  getElement () { return this.#elem; }
}

class LinkedList 
{
  #size = 0;
  #head = null;

  constructor (...elements) {
    if (elements) 
      for (let i in elements) this.add(elements[i]);
    this.#size = elements.length;
  }

  add (elem) 
  {
    const node = new Node(elem);
    if (!this.#head) this.#head = node;
    else this.getLast().setNext(node);
    this.#size++;
  }

  insert (elem, index) 
  {
    this.#checkIndex(index);
    const node = new Node (elem);
    if (index == 0) {
      const temp = this.#head;
      this.#head = node;
      node.setNext(temp);
    }
    else {
      const previous = this.#getNode(index - 1);
      const current = previous.getNext();
      previous.setNext(node);
      node.setNext(current);
    }
    this.#size++;
  }

  removeIndex (index) 
  {
    this.#checkIndex(index);
    if (index == 0) this.#head = this.#head.getNext();
    else {
      const previous = this.#getNode(index - 1);
      const current = previous.getNext();
      if (current.hasNext()) previous.setNext(current.getNext())
      else previous.setNext(null);
    }
    this.#size--;
  }

  removeElement (elem) 
  {
    const index = this.getIndex(elem);
    this.removeIndex(index);
  }

  getIndex (elem) 
  {
    for (let i = 0, current = this.#head; i < this.#size; i++, current = current.getNext()) 
      if (current.getElement() == elem) return i;
  }

  getElement (index) { return this.#getNode(index).getElement(); }

  getFirst () { return this.#getNode(0); }

  getLast () { return this.#getNode(this.#size); }

  getSize () { return this.#size; }

  toArray () 
  {
    const arr = [];
    for (let i = 0; i < this.#size; i++) arr[i] = this.getElement(i);
    return arr;
  }

  toString () { return this.toArray().join(", "); }

  #getNode (index) 
  {
    this.#checkIndex(index);
    if (!this.#head) return null;
    let current = this.#head;
    let i = 0;
    while (++i < index) current = current.getNext();
    return current;
  }

  #checkIndex (index) {
    if (index == undefined || index < 0 || index > this.#size) throw new Error("wrong index");
  }
}
