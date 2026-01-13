const n = document.getElementById("num")
const out = document.getElementById("result")
const img = document.getElementById("img-pop-up")
let arr = []
// เมื่อกด Enter ให้ทำงานฟังก์ชัน addData
document.getElementById("num").addEventListener("keypress", function(event){
    if (event.key === 'Enter'){
        addData();
    }   
});
function addData() {
    let num = parseInt(n.value)
    arr.push(num)
    console.log(arr);
    // out.innerHTML = arr;
    for (let i = 0; i < arr.length; i++){
        out.innerHTML = arr + "<br>";
    } if (num % 2 === 0){
        let pat = num * 2
        out.innerHTML += num + " is คู่ <br>" + pat + "<br>"
        img.style.display = "inline-block";
        img.src = "https://i.pinimg.com/736x/48/a7/8d/48a78d886c2a3ffbac8472811aced3fc.jpg";
        img.style.padding = "70px";
        img.style.borderRadius = "0px";
        img.style.height = "350px";
        img.style.width = "400px";;
    } if (num % 2 !== 0){
        let pat = num * 0
        out.innerHTML += num + " is คี่ <br>" + pat + "<br>";
        img.style.display = "inline-block";
        img.src = "https://i.pinimg.com/736x/7b/b4/5f/7bb45f567a122959248cb025c46952ad.jpg";
        img.style.padding = "70px";
        img.style.borderRadius = "0px";
        img.style.height = "350px";
        img.style.width = "400px";
     
    }  if (num <= 0 || isNaN(num)){
        out.innerHTML = "Please enter a number";
        img.style.display = "inline-block";
        img.src = "https://i.pinimg.com/736x/fe/c3/58/fec3580c3cf476955bdadf12926c4ffa.jpg";
        img.style.padding = "70px";
        img.style.borderRadius = "0px";
        img.style.height = "650px";
        img.style.width = "650px";
        out.style.fontSize = "50px";
        out.style.padding = "50px";
        out.style.color = "red";
        arr.pop(); // ตัว pop  จะลบค่าที่ไม่ถูกต้องออกจากอาเรย์จากด้านหลัง
    } 
}
