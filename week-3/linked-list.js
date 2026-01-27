let data = document.getElementById("data")

document.getElementById("push").onclick = function(){
    myLisy.unshift(data.value)
    console.log(myLisy)
}
function delet(){
    myLisy.shift()
    console.log(myLisy)
}
class Node{
    constructor(element){
        this.element = element
        this.next = null
    }
}
class Linked{
    constructor(){
        this.head = null
        this.last = null
        this.length = 0
    }
    pus(value){
        const newnode = new Node(value)
        if(this.head == null){
            this.head = newnode
            this.last = newnode
        }
        else{
            this.last.next = newnode
            this.last = newnode
        }
        this.length++
    }  
    unshift(value){
        let newnode = new Node(value)
        if (this.head == null){
            this.head = newnode
            this.last = newnode
        }else {
            newnode.next = this.head
            this.head = newnode
        }
        this.length++
    
    }
    shift(){
        
        if (this.length == 0){
            return undefined
        }
        let remove = this.head
            this.head = this.head.next
            remove.next = null
            this.length--
            if (this.length == 0){ 
            this.head = null
            this.last = null
            }
            return remove
    }   
}

//  main
// const newnode = new Node()
let myLisy = new Linked()
let r = myLisy.shift()
