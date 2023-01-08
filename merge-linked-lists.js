class Node {
    next 
    constructor(val) {
        this.val = val;
    }

}
class List {
    head = null;
    constructor(list) {
        const l = list.split("->").map(v => v !== null ? parseInt(v) : v);
        this.head = new Node(l[0]);
        let h = this.head;
        for (let i = 1; i < l.length; i++) {
            if (l[i] === null) h.next = l[i]
            else h.next = new Node(l[i]);
            h = h.next
        }
        h.next = null
    }
    print() {
        let h = this.head;
        let s = "";
        while(h !== null) {
            s += Number.isSafeInteger(h.val) ? h.val : h.next
            h = h.next;
            if (h !== null) s += "->"
        }
        return s;
    }
}

const mergeLinkedLists = (list1, list2) => {

}

const list1 = new List("1->2->3")
const list2 = new List("4->null")
console.log(list1.print())
console.log(list2.print())
