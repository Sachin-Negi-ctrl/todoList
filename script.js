const container = document.querySelector('.container')

const jsInput = document.querySelector('.inp')

const jsAddButton = document.querySelector('.add-btn')




let msgList = JSON.parse(localStorage.getItem('msglist') || '[]');


displaymsggg();

jsAddButton.addEventListener('click', ()=>{
    if(jsInput.value){
        msgList.push(jsInput.value)
        localStorage.setItem('msglist', JSON.stringify(msgList));

        jsInput.value = '';
        displaymsggg()
    }
   else{
    alert('Please enter a message!')
   }
})


function displaymsggg(){

    const oldMsgs = container.querySelectorAll('.display-msg');
    oldMsgs.forEach(msg => msg.remove());

    msgList.forEach((msg, index)=>{
    const displayMsg = document.createElement('div')

    displayMsg.classList.add('display-msg')

    displayMsg.innerHTML = `<p class="msg">${msg}</p><button class="delete-btn">delete</button>`;
    
    const delBtn = displayMsg.querySelector('.delete-btn');
        delBtn.addEventListener('click', () => {
            msgList.splice(index, 1);        
            localStorage.setItem('msglist', JSON.stringify(msgList)); 
            displaymsggg();                 
        });

    container.appendChild(displayMsg)


})}

