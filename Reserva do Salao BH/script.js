const form = document.getElementById('#Form')
const nameInput = document.getElementById('#inident')
const casaInput = document.getElementById('#incasa')
const propInput = document.getElementById('#prop-real')
const dateInput = document.getElementById('#date')
const timeInput = document.getElementById('#time')
const fileInput = document.getElementById('#list')


function submitForm() {

    if (nameInput == ""){
        alert("Precisa preencher o nome completo")
    }

    if (casaInput == ""){
        alert("Precisa o preencher o numero da residência")
    }

    if (propInput == ""){
        alert("Precisa preencher o nome do Proprietario")
    }

    if (dateInput ==""){
        alert("Precisa preencher a data")
    }

    if (timeInput == ""){
        alert("Presisa preencher a hora do evnto")
    }

    if (fileInput ==""){
        alert("Precisa preencher com a Lista de convidados")
    }

    form.addEventListener("submit", (e)=> {
        e.proventDefalt();
        form.submit();
        
    });
    
}
  
const modal = document.getElementById('janela-modal')

function AbrirModal() {
    modal.classList.add('abrir')   
}

//modal
function aceitarModal(){
    modal.addEventListener('click',(event) =>{
        if(event.target.id =='aceitar'){
            modal.classList.remove('abrir')
        }
    })
}