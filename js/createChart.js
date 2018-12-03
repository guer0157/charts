let chart={
    init: function(ev){
        
        
let img = new Image();

img.src = '../img/newvf.png';
let ctx, fillPattern;
img.onload = function() {
    ctx = document.getElementById('myChart').getContext('2d');
    fillPattern = ctx.createPattern(img, 'repeat');
        

let data=[]
//Array.min = function(data){
//    return Math.min.apply(Math, data);
//};
//let minimum=(Array.min(data)-10);
//console.log(minimum)
let labels=[]
//ev.forEach(user=>{
//    data.push(user.number_of_bottles)
//    labels.push(user.restaurant_name)
//})
        labels=["Tosca","Mill Street"]
        data=[12,20]
let borderColor=['rgba(186, 196, 89)','rgba(0, 0, 0)','rgba(255, 255, 0)','rgba(0, 0, 0)','rgba(50, 50, 50)','rgba(100, 50, 225)','rgba(0, 100, 200)']
let backgroundColor=['rgba(186, 196, 89, .5)','rgba(0, 0, 0,.5)','rgba(255, 255, 0,.5)','rgba(0, 0, 0,.5)','rgba(50, 50, 50,.5)','rgba(100, 50, 225,.5)','rgba(0, 100, 200,.5)']
console.log(data)
   

let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',
    // The data for our dataset
    data: {
        labels: labels,
        datasets: [{
            label: "Bottles Collected",
            backgroundColor: fillPattern,
            borderWidth: 3,
            borderColor: borderColor,
            data: data
        }]
    },

    // Configuration options go here
    options: {
        responsive:false,
        title:{
            display:true,
            text:"Chart of bottles",
            fontColor:"#000"
        },
        scales: {
            xAxes: [{
                gridLines:{
                    color:"rgba(0,0,0,0)",
                },
                ticks: {
                    suggestedMin:0,
                }
            }],
            yAxes: [{
                gridLines:{
                    color:"rgba(0,0,0,0)",
                }
    }]
        }
    }
});
}}}
document.addEventListener("DOMContentLoaded", chart.init)
