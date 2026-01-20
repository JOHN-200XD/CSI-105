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
document.getElementById("num").addEventListener("keypress", function(event_dele){
    if (event_dele.key === 'shift'){
        dele();
    }   
});
function addData() {
    let num = parseInt(n.value)
    arr.push(num)
    console.log(arr);
    // out.innerHTML = arr;
    for (let i = 0; i < arr.length; i++){
        out.innerHTML = ""; 
        out.innerHTML = arr + "<br>";
    } if (num % 2 === 0){
        let pat = num * 2
        out.innerHTML += num + " is คู่ <br>" + pat + "<br>"
        showImg_pair();

    } if (num % 2 !== 0){
        let pat = num * 1
        out.innerHTML += num + " is คี่ <br>" + pat + "<br>";
        showImg_odd();
     
    }  if (num <= 0 ){
        out.innerHTML = "";
        showImg_null_num();
        // arr.pop(); // ตัว pop จะลบค่าที่ไม่ถูกต้องออกจากอาเรย์จากด้านหลัง
    } if (isNaN(num)){
        out.innerHTML = "Push number ";
        showImg_null();
    }
}
// ลบค่าตัวท้ายสุดออกจากอาเรย์
document.getElementById("dele") 
function dele() {
    arr.pop();
    out.innerHTML = ""; 
    out.innerHTML = arr + "<br>";
    console.log("array after pop: " + arr);
    if (arr.length === 0){
        out.innerHTML = "deleted successfully";
        showImg_null(); 
    } 
}

// play and stop music
let p = 0;
const play = document.getElementById("conrol-music");
play.addEventListener("click", playMusic);
function playMusic() {
    const music = document.getElementById("music");
    if (p === 0){
        music.play();
        p = 1;
        play.innerHTML = "Stop Music";
        play.src = "https://i.pinimg.com/736x/d6/6f/a5/d66fa5e13bee5e6088a45bfed567ae74.jpg"
        play.style.width = "43px";
        play.style.height = "43px";
        music.style.display = "inline-block";
    } else {
        music.pause();
        p = 0;
        play.innerHTML = "Play Music";
        play.src = "https://i.pinimg.com/736x/ce/57/fb/ce57fb5565b5fdb2911843c06d0fc7d6.jpg";
        music.style.display = "none";

    }   
}

// แสดงรูป 
function showImg_pair(){
        img.style.display = "inline-block";
        img.src = "https://i.pinimg.com/736x/48/a7/8d/48a78d886c2a3ffbac8472811aced3fc.jpg";
        img.style.padding = "10px";
        img.style.borderRadius = "0px";
        img.style.height = "350px";
        img.style.width = "400px";
        img.style.marginTop = "0px";
        out.style.color = "black";
}

function showImg_odd(){
        img.style.display = "inline-block";
        img.src = "https://i.pinimg.com/736x/7b/b4/5f/7bb45f567a122959248cb025c46952ad.jpg";
        img.style.padding = "10px";
        img.style.borderRadius = "0px";
        img.style.height = "350px";
        img.style.width = "400px";
        img.style.marginTop = "0px";
        out.style.color = "black";
}

function showImg_null(){
        img.style.display = "inline-block";
        img.src = "https://i.pinimg.com/736x/fe/c3/58/fec3580c3cf476955bdadf12926c4ffa.jpg";
        img.style.padding = "10px";
        img.style.borderRadius = "0px";
        img.style.height = "350px";
        img.style.width = "350px";
        out.style.fontSize = "50px";
        out.style.padding = "50px";
        img.style.marginTop = "0px";
        out.style.color = "red";
}
function showImg_null_num(){
        img.style.display = "inline-block";
        img.src = "https://i.pinimg.com/736x/e8/b3/02/e8b302e4fc896a794e7e8eb7ae4a8fe2.jpg";
        img.style.padding = "10px";
        img.style.borderRadius = "0px";
        img.style.height = "350px";
        img.style.width = "350px";
        out.style.fontSize = "50px";
        out.style.padding = "50px";
        img.style.marginTop = "0px";
        out.style.color = "green";
}