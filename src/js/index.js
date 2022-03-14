const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
const url ="https://api-pokemon-mendes.herokuapp.com/api/pokemon"

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api-pokemon-mendes.herokuapp.com/api/pokemon", requestOptions)
    .then(response => response.text())
    .then(result => {
        var dados = JSON.parse(result)
        console.log(dados)

        console.log("     ")
        console.log(dados.length)
        console.log("     ")

        for(var i = 0; i <= dados.length; i++){
            var dadosSetados = dados[Object.keys(dados)[i]]
            var lala = 0

            Object.keys(dadosSetados).forEach(function(item){

                if( i == 0){
                    if (lala == 0) {
                        var id = dadosSetados[item]
                        numeroPokemonA.textContent = ("#" + id)
                    }
                        if (lala == 1) {
                            nomePokemonA.textContent = dadosSetados[item]
                        }
                            if (lala == 2) {
                                alturaPokemonA.textContent = dadosSetados[item]
                            }
                                if (lala == 3) {
                                    pesoPokemonA.textContent = dadosSetados[item]
                                }
                                    if (lala == 4) {
                                        habilidadesPokemonA.textContent = dadosSetados[item] 
                                    }
                                        if (lala == 5) {
                                            tipoPokemonA.textContent = dadosSetados[item] 
                                        }
                                            if (lala != 6){
                                                lala++
                                            }else{
                                                lala = 0
                                            }
                }

                if( i == 1){

                    if (lala == 0) {
                        var id = dadosSetados[item]
                        numeroPokemonB.textContent = ("#" + id)
                    }
                        if (lala == 1) {
                            nomePokemonB.textContent = dadosSetados[item]
                        }
                            if (lala == 2) {
                                alturaPokemonB.textContent = dadosSetados[item]
                            }
                                if (lala == 3) {
                                    pesoPokemonB.textContent = dadosSetados[item]
                                }
                                    if (lala == 4) {
                                        habilidadesPokemonB.textContent = dadosSetados[item] 
                                    }
                                        if (lala == 5) {
                                            tipoPokemonB.textContent = dadosSetados[item] 
                                        }
                                            if (lala != 6){
                                                lala++
                                            }else{
                                                lala = 0
                                            }
                    
                }

                /* if( i == 2){
                    
                }

                if( i == 3){
                    
                }

                if( i == 4){
                    
                }

                if( i == 5){
                    
                } */
                
            });
        }
         
    })
    .catch(error => console.log('error', error))



listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemomAberto = document.querySelector('.aberto')
        cartaoPokemomAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})

