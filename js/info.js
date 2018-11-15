let frame = document.getElementById("myChart").getContext('2d');
let data=[10,20,30]
let labels=['Red','Yellow','Blue']
let graph = new Chart(frame, {
    type:'pie',
    data:data,
    labels:labels
    })