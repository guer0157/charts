let chart={
    init: function(ev){
        console.log(ev)

let data=[]
let totalData=[10]
let ctx=document.getElementById("myChart").getContext('2d');
let labels=[]
ev.forEach(user=>{
    data.push(parseInt(user.number_of_bottles))
})
        
let getSum=(total, num)=>{
    console.log(total,num)
    return total + num
}

let randomRestaurant=ev[Math.floor(Math.random()*ev.length)];
console.log('console',randomRestaurant);
        labels.push(randomRestaurant.restaurant_name, 'Average per year')
        
let dataSum=data.reduce(getSum)/10;
//        let d=data.reduce(getSum);
        
//        let chartSet=[randomRestaurant.number_of_bottles, dataSum]
                       
        let chartSet=[randomRestaurant.number_of_bottles, dataSum]
//let borderColor=['rgb(175, 189, 56)','rgb(236, 239, 210)']
let backgroundColor=['rgb(175, 189, 56)','rgb(236, 239, 210)']

let dataset=[{
    label:"Bottles Collected",
    backgroundColor:'rgba(255, 255, 0,.5)',
    borderWidth:1,
    data:data[0],
    
}]   


let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',
    // The data for our dataset
    data: {
        labels: labels,
        datasets: [{
            label: "Bottles Collected",
            backgroundColor: backgroundColor,
            borderWidth: 3,
//            borderColor: borderColor,
            data: chartSet
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
                stacked:true,
                gridLines:{
                    color:"rgba(0,0,0,0)",
                },
                barPercentage: 0.5,
                categoryPercentage: .5,
    }]
        }
    }
});
}}

