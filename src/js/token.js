if(sessionStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar esssa página')
    window.location.href = '/login.html'
}

function sair(){
    localStorage.removeItem('token')
    window.location.href = '/login.html'
}