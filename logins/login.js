/*Isso aqui é um padrão para que o HTTP não funcione da forma padrão do
navegador, e assim possamos usar o javascript para fazer o funcionamento.
*/ 
document.getElementById('loginForm').addEventListener('submit', 
    function(event) {
    event.preventDefault();

const usernameLogin = document.getElementById('username').value;
const passwordLogin = document.getElementById('password').value;

if (usernameLogin === "" || passwordLogin === "") {
    alert(`Por favor, preencha todos os campos.`)
} else {
    console.log(`Username: ${usernameLogin}`)
    console.log(`password: ${passwordLogin}`)
    alert('Dados enviados.')
};
    })
    // Tenho que revisar isso aqui
/*
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(Response => response.json())
    .then(data => {
        console.log(`Success: ${data}`)
    })
    .catch((error) => {
        console.log(`Error: ${error}`)
    })
}
*/

