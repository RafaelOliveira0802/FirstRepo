const form = document.getElementById('#Form')
const nameInput = document.getElementById('#inident')
const casaInput = document.getElementById('#incasa')
const propInput = document.getElementById('#prop-real')
const dateInput = document.getElementById('#date')
const timeInput = document.getElementById('#time')
const fileInput = document.getElementById('#list')


function submitForm() {

    if (nameInput == ""){
        alert("precisa preencher o nome completo")
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