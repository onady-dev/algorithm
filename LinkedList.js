class Node {
    constructor(data){
        this.data = data
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(data){
        const newNode = new Node(data);

        if(this.size === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.size++;
    }

    remove(data){
        let current = this.head;
        let prev = null;
        while(current !== null && current.data !== data){
            prev = current;
            current = current.next;
        }

        if(current === null){
            return false;
        }

        if(prev === null){  // this.head가 지우려는 데이터인 경우
            this.head = current.next;
        }else{
            prev.next = current.next;
        }

        if(current === this.tail){
            this.tail = prev
        }

        this.size--;
        return true;
    }

    search(data){
        let current = this.head;
        while(current !== null && current.data !== data){
            current = current.next;
        }

        return current === null ? null : current
    }

}

const list = new LinkedList();
list.add(1)
list.add(2)
list.add(3)
list.remove(1)