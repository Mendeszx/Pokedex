function cadastrarUsuario(){
    event.preventDefault()
    let url = "https://api-pokemon-login.herokuapp.com/api/cadastrar"
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    body = {
        "id": "",
        "nome" : nome,
        "email": email,
        "senha": senha
    }

    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        if(this.response == "true"){
            window.location.href = '/login.html'
        }else{
            alert("Usuário já cadastrado!")
        }
        
    }
}

var numrandom = Math.floor(Math.random() * 905)
document.getElementById("pokemon-img-cadastrar").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + [numrandom] + ".png";