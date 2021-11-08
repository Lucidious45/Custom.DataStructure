
  const error1 = new Error("Your list is empty")
  const error2 = new Error("This value is not in your list")

  
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

  find(value){
    if (!this.head){
      throw error1;
    }

    let curNode = this.head;

    while(curNode){
        if(curNode.value === value){
          curNode;
        }
        else{
          curNode = curNode.next;
        }
    }
    return error2;
  }

  delete(value){
    if (!this.head){
      throw error1;
    }

    // delete head als het matcht met je value( geen if/else voor als er duplicates zijn)
    while(this.head && this.head.value === value){
      this.head = this.head.next;
    } 

    let curNode = this.head;

    
    while(curNode.next){
        if(curNode.next.value === value){
          curNode.next = curNode.next.next;
        }
        else{
          curNode = curNode.next;
        }
    }

    //delete de tail
    if(this.tail.value === value) {
      this.tail =curNode;
    }
  }
}

const Alfabet = new LinkedList();
const EmptyList = new LinkedList();

Alfabet.append("b");
Alfabet.append("c");
Alfabet.append("d");
console.log(Alfabet.ToArray())

Alfabet.prepend("a");
console.log(Alfabet.ToArray())

/* // test voor lege lijst
EmptyList.delete();
console.log(EmptyList.ToArray())
 */

Alfabet.prepend(39);
Alfabet.prepend(false);
Alfabet.append(39);
Alfabet.append(0);
console.log(Alfabet.ToArray())

Alfabet.delete(39);
Alfabet.delete(false);
Alfabet.delete(0);
console.log(Alfabet.ToArray())

//console.log(Alfabet.find("a"))
//console.log(Alfabet.find(39)) 
//code blokkeert met find