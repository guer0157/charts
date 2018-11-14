let frame = document.getElementById("myChart");
let data=[10,20,30]
let labels=['Red','Yellow','Blue']
let graph = new Chart(frame, {
    type:'pie',
    data:data,
    labels:labels,
    
    })