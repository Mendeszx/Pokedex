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
                                var altura = dadosSetados[item]
                                alturaPokemonA.textContent = ("Altura: " + altura + " M")
                            }
                                if (lala == 3) {
                                    var peso = dadosSetados[item]
                                    pesoPokemonA.textContent = ("Peso: " + peso + " Kg")
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
                                var altura = dadosSetados[item]
                                alturaPokemonB.textContent = ("Altura: " + altura + " M")
                            }
                                if (lala == 3) {
                                    var peso = dadosSetados[item]
                                    pesoPokemonB.textContent = ("Peso: " + peso + " Kg")
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

                if( i == 2){
                    
                    if (lala == 0) {
                        var id = dadosSetados[item]
                        numeroPokemonC.textContent = ("#" + id)
                    }
                        if (lala == 1) {
                            nomePokemonC.textContent = dadosSetados[item]
                        }
                            if (lala == 2) {
                                var altura = dadosSetados[item]
                                alturaPokemonC.textContent = ("Altura: " + altura + " M")
                            }
                                if (lala == 3) {
                                    var peso = dadosSetados[item]
                                    pesoPokemonC.textContent = ("Peso: " + peso + " Kg")
                                }
                                    if (lala == 4) {
                                        habilidadesPokemonC.textContent = dadosSetados[item]
                                    }
                                        if (lala == 5) {
                                            tipoPokemonC.textContent = dadosSetados[item]
                                        }
                                            if (lala != 6){
                                                lala++
                                            }else{
                                                lala = 0
                                            }
                    
                }

                if( i == 3){
                    
                    if (lala == 0) {
                        var id = dadosSetados[item]
                        numeroPokemonD.textContent = ("#" + id)
                    }
                        if (lala == 1) {
                            nomePokemonD.textContent = dadosSetados[item]
                        }
                            if (lala == 2) {
                                var altura = dadosSetados[item]
                                alturaPokemonD.textContent = ("Altura: " + altura + " M")
                            }
                                if (lala == 3) {
                                    var peso = dadosSetados[item]
                                    pesoPokemonD.textContent = ("Peso: " + peso + " Kg")
                                }
                                    if (lala == 4) {
                                        habilidadesPokemonD.textContent = dadosSetados[item]
                                    }
                                        if (lala == 5) {
                                            tipoPokemonD.textContent = dadosSetados[item]
                                        }
                                            if (lala != 6){
                                                lala++
                                            }else{
                                                lala = 0
                                            }
                    
                }

                if( i == 4){
                    
                    if (lala == 0) {
                        var id = dadosSetados[item]
                        numeroPokemonE.textContent = ("#" + id)
                    }
                        if (lala == 1) {
                            nomePokemonE.textContent = dadosSetados[item]
                        }
                            if (lala == 2) {
                                var altura = dadosSetados[item]
                                alturaPokemonE.textContent = ("Altura: " + altura + " M")
                            }
                                if (lala == 3) {
                                    var peso = dadosSetados[item]
                                    pesoPokemonE.textContent = ("Peso: " + peso + " Kg")
                                }
                                    if (lala == 4) {
                                        habilidadesPokemonE.textContent = dadosSetados[item]
                                    }
                                        if (lala == 5) {
                                            tipoPokemonE.textContent = dadosSetados[item]
                                        }
                                            if (lala != 6){
                                                lala++
                                            }else{
                                                lala = 0
                                            }
                    
                }

                if( i == 5){
                    
                    if (lala == 0) {
                        var id = dadosSetados[item]
                        numeroPokemonF.textContent = ("#" + id)
                    }
                        if (lala == 1) {
                            nomePokemonF.textContent = dadosSetados[item]
                        }
                            if (lala == 2) {
                                var altura = dadosSetados[item]
                                alturaPokemonF.textContent = ("Altura: " + altura + " M")
                            }
                                if (lala == 3) {
                                    var peso = dadosSetados[item]
                                    pesoPokemonF.textContent = ("Peso: " + peso + " Kg")
                                }
                                    if (lala == 4) {
                                        habilidadesPokemonF.textContent = dadosSetados[item]
                                    }
                                        if (lala == 5) {
                                            tipoPokemonF.textContent = dadosSetados[item]
                                        }
                                            if (lala != 6){
                                                lala++
                                            }else{
                                                lala = 0
                                            }
                    
                }
                
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

