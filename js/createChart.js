let img=document.getElementById("img")
img.src=""





let chart={
    init: function(ev){
let ctx = document.getElementById('myChart');
        console.log(ev);
let data=[]
//Array.min = function(data){
//    return Math.min.apply(Math, data);
//};
//let minimum=(Array.min(data)-10);
//console.log(minimum)
let labels=[]
ev.forEach(user=>{
    data.push(user.number_of_bottles)
    labels.push(user.restaurant_name)
})
let backgroundColor=['rgb(255, 99, 132)','rgb(100, 100, 100)','rgb(255, 255, 0)','rgb(0, 0, 0)','rgb(50, 50, 50)','rgb(100, 50, 225)','rgb(0, 100, 200)']
console.log(data)
        
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
        labels: labels,
        datasets: [{
            label: "Bottles Collected",
            backgroundColor: backgroundColor,
            borderColor: 'rgb(0, 100,100)',
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
        }
    }
});
}}