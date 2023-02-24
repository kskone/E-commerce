let nom = document.querySelector('#nom');
let prenom = document.querySelector('#prenom');
let mail = document.querySelector('#mail');
let passe = document.querySelector('#passe');
let confirmer = document.querySelector('#confirmer');
let bouton = document.querySelector('#bouton');



bouton.addEventListener('click',(e)=>{
    let user = {
        nom: nom.value,
        prenom: prenom.value,
        mail: mail.value,
        passe: passe.value
    };
    console.log(user);
    e.preventDefault()
    localStorage.setItem('nom',user.nom);
    localStorage.setItem('prenom',user.prenom);
    localStorage.setItem('mail',user.mail);
    localStorage.setItem(' mot de passe',user.passe);
    console.log('nom');
})