//array contenente permessi
function loginUser(){
    const users = ['lucia@gmail.com','marco@gmail.com','paolo@gmail.com'];
    let login = document.getElementById('email').value;

    for (let i = 0; i < users.length; i++){
        nick = users[i]
        console.log(`user + ${login}`)

        if (login === nick){
            
            document.getElementById('result').innerHTML = "permesso autorizzato"
        } else {
            alert('non puo accedere')
        }
    }
}


//ramdom number
function randomM(){
    let num1 = Math.floor(Math.random() * 6) + 1;
    console.log(num1);

    let num2 = Math.floor(Math.random() * 6) + 1;
    console.log(num2);

    if (num1 > num2){
        document.getElementById('vincitore').innerHTML = "Ha vinto il giocatore Numero1"
    } else if (num2 > num1){
        document.getElementById('vincitore').innerHTML = "Ha vinto il giocatore Numero2"
    } else {
        document.getElementById('vincitore').innerHTML = "Pareggio"
    }
}