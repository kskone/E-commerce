let mail = document.querySelector('#mail');
let passe = document.querySelector('#passe');
let bouton = document.querySelector('#bouton');


if(localStorage.getItem('mail') != null)
textContent = `se connecter${localStorage.getItem('mail')}`;

bouton.addEventListener('click',(e)=>{
    let user = {
        mail: mail.value,
        passe: passe.value
    };
    console.log(user);
    e.preventDefault()
    localStorage.getItem('mail',user.mail);
    localStorage.setItem(' mot de passe',user.passe);
    console.log('nom');
})










// Bouton.onclick = ()=>{
//     localStorage.setItem("nom",mail.value)
// } 