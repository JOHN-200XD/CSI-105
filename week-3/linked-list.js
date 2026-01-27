class node{
    constructor(elem){
        this.elememnt = elem
        this.next = null
        this.lenght = 0
    }
}
class Linked{
    constructor(){
        this.new = null
        this.lest = null
        this.lenght = 0
    }
    pus(value){
        const newnode = new node(value)
        if(this.new == null){
            this.new = newnode
            this.lest = newnode
        }
        else{
            newnode.next = this.new
            this.lest.new = newnode
            this.lest = newnode
        }
        this.lenght++
    }
    unshift(value){
        const newnode = new node(value)
        if (this.new == null){
            this.new = newnode
            this.lest = newnode
        }else {
            newnode.next = this.new
            this.new = newnode
            this.lest = newnode
        }
        this.lenght++
    }
    shift(){
            let constructor = this.new
        if (this.lenght == 0){
            return undefined
        }
            this.new = this.new.next
            constructor.next = null
            this.lenght--
        if(this.lenght == 0) {
            this.lest = null
        }
        return constructor
    }
}

//  main
const newnode = new node()
let myLisy = new Linked()
let r = myLisy.shift()
myLisy.unshift("a")
myLisy.unshift("b")
myLisy.unshift("c") 
myLisy.shift("a")
console.log(myLisy)
