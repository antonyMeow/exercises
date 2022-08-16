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
    if (!elements) return;
    this.#head = new Node(elements[0]);
    if (elements.length == 1) return;
    for (let i = 1; i < elements.length; i++) {
      const node = new Node (elements[i]);
      let current = this.#head;
      while (current.hasNext()) 
        current = current.getNext();
      current.setNext(node);
      this.#size++;
    }
  }

  add (elem) 
  {
    const node = new Node(elem);
    if (!this.#head) this.#head = node;
    else {
      let current = this.#head;
      while (current.hasNext()) 
        current = current.getNext();
      current.setNext(node);
    }
    this.#size++;
  }

  insert (elem, index) 
  {
    if (index == undefined || index < 0 || index > this.#size) throw new Error("wrong index");
    const node = new Node(elem);
    if (index == 0) {
      const temp = this.#head;
      this.#head = node;
      node.setNext(temp);
      this.#size--;
      return;
    }
    let previous = this.#head;
    let current = previous.getNext();
    let i = 0;
    while (i < index - 1) {
      previous = current;
      current = current.getNext();
      i++;
    }
    previous.setNext(node);
    node.setNext(current);
    this.#size++;
  }

  removeIndex (index) 
  {
    if (index == undefined || index < 0 || index > this.#size) throw new Error("wrong index");
    if (index == 0) {
      this.#head = this.#head.getNext();
      this.#size--;
      return;
    }
    let previous = this.#head;
    let current = previous.getNext();
    let i = 0; 
    while (i < index - 1) {
      previous = current;
      current = current.getNext();
      i++;
    }
    if (current.hasNext()) previous.setNext(current.getNext())
    else previous.setNext(null);
    this.#size--;
  }

  removeElement (elem) 
  {
    let previous = this.#head;
    let current = previous.getNext();
    if (previous.getElement() == elem) {
      this.#head = this.#head.getNext();
      this.#size--;
      return;
    }
    for (let i = 0; i < this.#size; i++) {
      if (current.getElement() == elem) {
        previous.setNext(current.getNext());
        this.#size--;
        return;
      }
      previous = current;
      current = current.getNext();
    }
  }

  getElement (index) 
  {
    if (index == undefined || index < 0 || index > this.#size) throw new Error("wrong index");
    let current = this.#head;
    let i = 0;
    while (i < index) {
      current = current.getNext();
      i++
    }
    return current.getElement();
  }

  getSize () { return this.#size; }

  toString () 
  {
    let current = this.#head;
    let str = "" + current.getElement();
    while (current.hasNext()) {
      str += ", " + current.getNext().getElement();
      current = current.getNext();
    }
    return str;
  }
}

//test

const ll = new LinkedList ("I", "love", "pizza");
ll.add("Meow");
ll.add("Hello world!");
ll.insert("insertion", 1);
ll.insert("something", 2);
ll.removeIndex(2);
ll.removeElement("insertion");
console.log(ll.getSize());
console.log(ll.getElement(4));
console.log(ll.toString());