
    let message=document.querySelector('.message')
    let textMessage=document.querySelector('.text-message')
    textMessage.addEventListener('change',(ev)=>{
        console.log(ev.currentTarget.value)
       message.href=`whatsapp://send?text=${ev.currentTarget.value}&phone=+14389790112&abid=+14389790112`;
    })
