if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar esssa página')
    window.location.href = 'https://pokedex-login.herokuapp.com/'
}