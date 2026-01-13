const n = document.getElementById("num")
const out = document.getElementById("result")
let arr = []
function addData(){
    let num = parseFloat(n.value)
    arr.push(num)
    console.log(arr.length);
    
}
