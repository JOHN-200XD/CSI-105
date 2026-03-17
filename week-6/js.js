   const max = document.getElementById("Max")
    const ran = document.getElementById("quantity")
    const manu = document.getElementById("manu")
    const put_1 = document.getElementById("put_1")
    const put_2 = document.getElementById("put_2")
    let data = []
    function rm() {
        data = []
        let num = Number(ran.value)
        if(num <= 0 ){
            alert("Please enter a positive number")
             document.getElementById("r-put").innerHTML = "error: please enter a positive number"
             return
        }
        let maxValue = Number(max.value) || 100
        for(let i = 0 ;i < num ; i++){
            data.push(Math.floor(Math.random()*maxValue)) 
        }
        console.log("Random",data);
        document.getElementById("r-put").innerHTML = "[" + data.join(", ") + "]"
        barchat(data)

    }
   async function Sorting() {
        if(data.length == 0){
        alert("Please generate random numbers first")
             put_1.innerHTML = "error: no data to sort"
            return
        }
        put_1.innerHTML = "Before: " + "[" + data.join(", ") + "]"
        if(manu.value == "bubble"){
             await mksort.bubble(data)
        } else if(manu.value == "insertion"){
             await mksort.insertionSort(data)
        } else if(manu.value == "shell"){
             await mksort.Shell(data)
        }  
        put_2.innerHTML = "After: " + "[" + data.join(", ") + "]"
            barchat(data)
    }   
    // กราฟ
    function barchat(arr){
        const chart = document.getElementById("chart")
        chart.innerHTML = ""
        for(let i = 0; i<arr.length;i++){
            const bar = document.createElement("div")
            bar.classList.add("bar")
            bar.style.height = arr[i] + "px"
            bar.innerText = arr[i]
            chart.appendChild(bar)
            setTimeout(() => {
             bar.style.height = arr[i] + "px"
            },i*50); 
        }
    }
    // อนิเมชั่น กราฟ 
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    class Sort {
    async bubble(arr) {
            let temp   
            for (let i = 0; i<arr.length-1; i++) {
                for (let k = 0; k<(arr.length-i)-1; k++) {
                    if (arr[k] > arr[k+1]) {
                        temp = arr[k]
                        arr[k] = arr[k+1]
                        arr[k+1] = temp

                        barchat(arr)
                        await sleep(100)
                    }
                }
            } return arr
        }

async insertionSort(arr){
            let key,k
            for(let i = 1; i<arr.length;i++){
                key = arr[i]
                k = i-1
                while(k>=0 && key<arr[k]){
                    arr[k+1] = arr[k]
                    k = k-1
                }
                    arr[k+1] = key
                 barchat(arr)
                 await sleep(100)
                } return arr
            }

async Shell(arr) {
            let gap = Math.floor(arr.length/2) 
            let temp,k  
                while(gap > 0){
                    for(let i = gap;i<arr.length;i++){
                        temp = arr[i]
                        k = i 
                        while(k >= gap && arr[k-gap] > temp){
                            arr[k] = arr[k-gap]
                            k = k - gap
                        }   arr[k] = temp
                        barchat(arr)
                        await sleep(100)
                    }
                    gap = Math.floor(gap/2)
                } return arr
            }
    }
    let mksort = new Sort()
   
    // let data = []
    // for(let i = 0;i<10;i++){
    //     data.push(Math.floor(Math.random()*100))
    // }
    // console.log("Shell",data);
    // mksort.Shell(data)
    // console.log("Shell",data);


    