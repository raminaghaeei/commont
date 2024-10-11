function autoclock(){
    let now = document.getElementById('clock');
    let time = new Date();
    now.innerText = time.toLocaleTimeString();
}
setInterval(autoclock, 1000);



document.getElementById('formm').addEventListener('submit', function(event){
    event.preventDefault();

let username = document.getElementById('userName').value;

let emaile = document.getElementById('email').value;

let commente = document.getElementById('commente').value;

let response =  document.getElementById('response');
response.innerText = `Thank you, ${username}! We have received your message.`;
});
