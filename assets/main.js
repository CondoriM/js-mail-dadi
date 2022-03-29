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