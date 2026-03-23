let data = document.getElementById("data")
let output = document.getElementById("output")
document.getElementById("push").onclick = function(){
        if (!data.value) {
        alert("ใส่ข้อมูลก่อน")
        return
    }

    myList.push(data.value)
    render();
    console.log(myList);
}

function clearList() {
    myList.clear()
    render()
}
function popNode() {
    let r = myList.pop();
    console.log(r);
    render();
    console.log(myList);
    
}
function unshift(){
        if (!data.value) {
        alert("ใส่ข้อมูลก่อน")
        return
    }
    
    let r = myList.unshift(data.value)
    render();
    console.log(r);
}
function shiftNode(){
    let r = myList.shift()
    render();
    console.log(r);
}

function setNode() {
    let index = parseInt(prompt('ใส่ index'))
    if (isNaN(index)) {
        alert("กรุณาใส่ตัวเลข")
        return
    }

    let value = data.value
    if (!value) {
        alert("ใส่ข้อมูลก่อน")
        return
    }

    let r = myList.set(index, value)
    render()
    console.log(r);
}
function getNode() {
    let index = parseInt(prompt('ใส่ index'))

    if (isNaN(index)) {
        alert("กรุณาใส่ตัวเลข")
        return
    }

    let node = myList.get(index)

    if (!node) {
        alert("index ไม่ถูกต้อง")
        return
    }

    alert(`ค่าที่ index ${index} คือ ${node.element}`)
}
function insert() {
    let index = parseInt(prompt('ใส่--Index'))
    if (isNaN(index)) {
        alert("กรุณาใส่ตัวเลข")
        return
    }
    let value = data.value
    let r = myList.insert(index, value) // index, value (...)
    render()
    console.log(r);
}
function re_insert() {
    let index = parseInt(prompt('ใส่--Index'))
    if (isNaN(index)) {
        alert("กรุณาใส่ตัวเลข")
        return
    }
    let r = myList.removed(index)
    render()
    console.log(r);
}
function render() {
    output.innerHTML = "";
    let current = myList.head;
    if (!current) {
        output.innerHTML = "(complesson delete)";
        return;
    }
    while (current !== null) {
        output.innerHTML += current.element;
        if (current.next !== null) {
            output.innerHTML += "==>";
        }  
        current = current.next
        
    }
}
class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}
class Linked {
    constructor() {
            this.head = null
            this.last = null
            this.length = 0
    }
    clear() {
        this.head = null
        this.last = null
        this.length = 0
    }
    set(index, value) {
    let node = this.get(index)

    if (!node) {
        return false
    }

    node.element = value
    return true
}
    push(value) {
        const newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode
            this.last = newNode
        }
        else {
            this.last.next = newNode
            this.last = newNode
        }
            this.length++ 
            return newNode
    } 
    pop() {
        if (this.head == null) {
            return undefined
        }
        if (this.head === this.last) {
            const removed = this.head
            this.head = null
            this.last = null
            this.length = 0
            return removed
        }
        let current = this.head
        let before = current
        while (current.next != null) {
            before = current
            current = current.next
        }
            this.last = before
            this.last.next = null
            this.length--
        return current
    }
    unshift(value) {
        const newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode
            this.last = newNode
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
            this.length++
        return newNode
    }
    shift() {
        if (this.head == null) {
            return undefined
        }
        const removed = this.head
            this.head = this.head.next
            this.length--
        if (this.length == 0) {
            this.last = null
        }
        return removed
    }
    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false
        }
        if (index == 0) {
            this.unshift(value)
            return true
        }
        if (index == this.length) {
            this.push(value)
            return true
        }
        const newNode = new Node(value)
        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
            newNode.next = current.next
            current.next = newNode
            this.length++
        return true
    }
    removed(index) {
        if (index < 0 || index >= this.length) {
            return false
        }
        if (index == 0) {
            this.shift()
            return true
        }
        if (index == this.length - 1) {
            this.pop()
            return true
        }
        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next

        }
        current.next = current.next.next
        this.length--
        return true
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }
}
let myList = new Linked()
// myList.unshift("10")
// myList.unshift("20")
// myList.unshift("30")
// console.log(myList);
