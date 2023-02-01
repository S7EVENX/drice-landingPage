//ENVIO DE FORMULARIO
const form = document.querySelector('.formulario-contacto');
const response = document.querySelector('.contact-form-response');

//Eventos
form.addEventListener("submit", (e) => {
    e.preventDefault();
    enviarMail();
});

function enviarMail(){
    // Capturar datos formulario
    let nombre   = document.querySelector('#nombre').value,
        correo   = document.querySelector('#correo').value, 
        telefono = document.querySelector('#telefono').value, 
        mensaje  = document.querySelector('#mensaje').value;

    // Peticion al backend
    const url = 'assets/php/mail.php';
    const formData = new FormData(form);
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.ok  ? res.json() :Promise.reject(res))
    .then(data => {
        //Mostrar mensaje de enviado
     
        response.innerHTML= `<p class="enviado">${data.message}</p>`;
      
        //Limpiar formulario
        form.reset();
    })
    .catch(err => {
        console.log(err);
        let message = err.statusText || "Ocurio un error al enviar el mensaje, intentelo mas tarde";
        response.innerHTML = `<p class="error" >Error${err.status}: ${message}</p>`;
    })
    .finally( () => setTimeout(() => {
        response.innerHTML= "";
      }, 3000));
    
}


//MENU RESPONSIVE
const btnResponsive = document.querySelector(".icono-nav");

btnResponsive.addEventListener("click",responsiveMenu);

//Funcion para mostrar el menu
function responsiveMenu(){
    let nav = document.querySelector(".nav");
     nav.classList.toggle("responsive");
}
