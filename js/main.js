let bottleWorks={
    baseurl:"https://allengoo.com/php/bottleworksform.php",
    init: function(){
    let options={
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        headers:{
                "Access-Control-Allow-Origin":"*"}
    };
    
    fetch(bottleWorks.baseurl)
        .then(response=>response.json())
        .then(data=>{console.log(data)})
        .catch(err=>{console.log(err)})
    }
}
document.addEventListener("DOMContentLoaded", bottleWorks.init)

