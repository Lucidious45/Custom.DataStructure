class LinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value){
    const newNode = {value: value, next : null}

    if(this.tail){
      this.tail.next= newNode;
    }
    this.tail= newNode;
    if (!this.head){
      this.head = newNode;
    }
  }

  ToArray() {
    const elements = [];
    let curNode = this.head;
    while(curNode){
      elements.push(curNode)
      curNode = curNode.next;
    }

    return elements;
  }

  prepend(value){
    const newNode = {value: value, next : this.head}

      this.head = newNode;
      if(!this.tail){
        this.tail = newNode;
      }
    
  }
}

const Alfabet = new LinkedList();

Alfabet.append("b");
Alfabet.append("c");
Alfabet.append("d");

console.log(Alfabet.ToArray())


Alfabet.prepend("a");

console.log(Alfabet.ToArray())
