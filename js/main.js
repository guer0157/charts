let bottleWorks={
    baseurl:"https://allengoo.com/php/bottleworksform.php",
    bottles:null,
    init: function(){
    let options={
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        headers:{
                "Access-Control-Allow-Origin":"*"}
    };
    
    fetch(bottleWorks.baseurl)
        .then(response=>response.json())
        .then(bottleWorks.runChart)
        .catch(err=>{console.log(err)})
    },
    runChart: function(data){
        console.log(data);
        bottleWorks.bottles=[]
        data.forEach(user=>{
            bottleWorks.bottles.push(user.number_of_bottles)
        })
         console.log(bottleWorks.bottles);
    }
}
document.addEventListener("DOMContentLoaded", bottleWorks.init)

