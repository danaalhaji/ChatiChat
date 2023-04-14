const socket = io(); // we have access on it because of the script tag we are added in the chat.hmtl file 

const chatFrom = document.getElementById('chat-form');

// message from server
socket.on('message', message =>{
    console.log(message);
    outputMessage(message);
})

// message submit

chatFrom.addEventListener('submit', e =>{

    e.preventDefault();
    const msg = e.target.elements.msg.value;

    // Emit message to server
    socket.emit('messageChat', msg);
})

// Output message to DOM
function outputMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = '
    '
}