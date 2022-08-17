// have not finished yet (or at all)
// (i won't work now)

class ListNode 
{
  #elem;
  #next;
  #prev;

  constructor (elem) { this.#elem = elem; }
  getElement () { return this.#elem; }
  getNext () { return this.#next; }
  getPrevious () { return this.#prev; }
  setNext (node) { this.#next = this.#typeCheck(node); }
  setPrevious (node) { this.#prev = this.#typeCheck(node); }
  hasNext () { return !!this.#next; }
  hasPrevious () { return !!this.#prev; }
  #typeCheck (elem) { return elem instanceof ListNode ? elem : new ListNode(elem); }
}

class DoublyLinkedList
{
    #size = 0; 
    #head = null;
    #tail = null;
  
    constructor (...elements) 
    {
      for (let elem in elements) this.add(elem);
    }

    add (elem, index) 
    {
      if (this.#size == 0) {
        const node = new ListNode (elem);
        this.#head = node;
        this.#tail = node;
        this.#increaseSize();
        return;
      }
      if (index == 0) this.prepend(elem);
      else if (index == this.#size + 1) this.append(elem);
      else {
        const current = this.#getNode(index);
        const previous = current.getPrevious() || null;
        const next = current.getNext() || null;

        this.#increaseSize();
      }
    }

    append (elem) 
    {
      const node = new ListNode(elem);
      const temp = this.#temp;
      node.setPrevious(temp);
      node.getPrevious().setNext(node);
      this.#tail = node;
      this.#increaseSize();
    }

    prepend (elem) 
    {
      const node = new ListNode(elem);
      const temp = this.#head;
      node.setNext(temp);
      node.getNext().setPrevious(node);
      this.#head = node;
      this.#increaseSize();
    }

    removeElement (elem) {}

    removeAt (index) {}
    
    removeHead () {}

    removeTail () {}

    getElement (index) {}
    
    getIndexOf (elem) {}

    getHead () {}

    getTail () {}

    reverse () {}

    toArray () {}

    toString () {}

    #getNode (index) 
    {
      this.#checkIndex(index);
      if (!this.#head) return null;
      const current = this.#head;
      let i = 0;
      while (++i < this.#size) current = current.getNext();
      return current;
    }

    #checkIndex (index) 
    {
      if (index == undefined || index < 0 || index > this.#size) throw new Error("wrong index");
    }

    #increaseSize () { this.#size++; }

    #decreaseSize () { this.#size--; }
}

const dll = new DoublyLinkedList ();
dll.append("meow");
dll.prepend("Hello");