function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => {return res.json()})
    .then( states => {

        for( const state of states){

            ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`

        }
    })
}
populateUFs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")

    console.log(event.target.value)

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    citySelect.innerHTML ="<option value>Selecione a cidade</option>"

    citySelect.disabled = true;
    
    fetch(url)
    .then( (res) => {return res.json()})
    .then( cities => {

        for( const city of cities){

            

            citySelect.innerHTML +=  `<option value="${city.nome}">${city.nome}</option>`
        }
            citySelect.disabled = false;
        })
}


document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)
  
// Itens de coleta  
//pegar todos os li's

const itensToCollect = document.querySelectorAll(".itens-grid li")

    for (const item of itensToCollect) {
        item.addEventListener("click", handleSelectedItem)
    }

    const collectedItems = document.querySelector("input[name=itens]")

    let selectedItens = []

    function handleSelectedItem(event){
        const itemli = event.target
        /* Adicionar ou remover uma classe com javascript*/
        itemli.classList.toggle("selected")


        const itemId = itemli.dataset.id

        console.log('item id:', itemId)

       
              

        //verificar se existem itens selecionados
        //se sim pegar os itens selecionados

        const alreadySelected = selectedItens.findIndex( item => {
            const itemFound = item == itemId //Isso será true or false

            return itemFound
        })

        //se já estiver selecionado, tirar da seleção
        if ( alreadySelected >= 0 ) {
            //tirar da seleção
            const filteredItens = selectedItens.filter( item => {
                const itemIsdifferent = item != itemId //false
                return itemIsdifferent
            })
            
            selectedItens = filteredItens

        } else{
            //se não estiver selecionado, adicionar a seleção
            selectedItens.push(itemId)
        }
        console.log('selectedItens:', selectedItens)

        //se não estiver selecionado, adicionar à seleção
        //atualizar o campo escondido com os itens selecionados
        collectedItems.value = selectedItens

    }


