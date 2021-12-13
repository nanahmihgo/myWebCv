
// let options = document.querySelectorAll('option')

//  options[0].addEventListener('click', () => {
//    window.location.href='./html/inscr.html'
//  })
//  options[1].addEventListener('click', () => {
//    window.location.href='./html/inscr.html'
//  })
//  options[2].addEventListener('click', () => {
//    window.location.href='./html/inscr.html'
//  })


let menu = document.querySelectorAll('.menu');
let block = document.getElementsByClassName('block');
let burger = document.querySelector('i');


  burger.addEventListener('click', () => {
      console.log(menu[0].classList.length);
      if(menu[0].classList.length == 2) {
      menu[0].classList.remove('test');
      block[0].classList.remove ('test2');
      } 
      else if (menu[0].classList.length == 1) {
      menu[0].classList.add('test');
      block[0].classList.add('test2');
      }
    })


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.formulaire')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


    // window.addEventListener


    //jQuery 

// $(function(){

//     $('h1').css('color', 'pink');
//     $('h2').css('color', 'green');
//     $('.nom').css('background-color', 'blue');
//     $('.prenom').css('background-color', 'pink');
//     $('.tel').css('background-color', 'salmon');
//     $('.email').css('background-color', 'orange');
//     $('.mdp').css('background-color', 'yellow');

// })

// //debut du code
// document.querySelector('.menu').style.display = 'none';
// document.querySelector('#amp-on').style.display = 'block';

// var bouttonClick = document.getElementById('btn');

// // ce qui se apsse si je clique sur le bouton
// bouttonClick.addEventListener('click', () => {
//     //comportement si tu cliques

//     //on récupere les element du DOM
//     var ampouleOn = document.getElementById('amp-on');
//     var ampouleOff = document.querySelector('#amp-off');

//     //ampouleOn.style.display => on recupère la propriété css de l'element HTML
//     if (ampouleOn.style.display == 'block') {
//         // si l'ampoule allumée est a l'écran
//         ampouleOn.style.display = 'none';
//         ampouleOff.style.display = 'block';

//     } else if (ampouleOff.style.display == 'block') {
//         //si l'ampoule eteinte est a l'ecran 
//         ampouleOff.style.display = 'none';
//         ampouleOn.style.display = 'block';
//     }
// });































//Objet Vince

// let Vince = {
//     name : "Fischer",
//     firstName: "Vince",
//     age: 37,
//     sexe: Male,
//     job: "Développeur web",
//     passion: "Physiologie",
//     hobbies: "Sport and e-sport"
// };

// class Profil {
//      (name, firstName, age, sexe, job, passion, hobbies) {
//         this.name = name;
//         this.firstName = firstName;
//         this.age = age;
//         this.sexe = sexe;
//         this.job = job;
//         this.passion = passion;
//         this.hobbies = hobbies;
//     }
// }

// function Voiture (motorisation, annee, model) {
//        this.motorisation = motorisation,
//        this.annee = annee,
//        this.model = model
//    }

// class & new
// let seat = new voiture(essence, 2021, ibiza);
// let bmw = new voiture(diesel, 2021, m3);
// let dacia = new voiture(essence, 2014, sandero);
// let Jamal = new Profil("Taoufiki", "Jamal", 37, Male, "Développeur web", "Pizzas", "Sieste");
// let xbv = new Profil("Bourgeois", "Xavier", 37, Male, "Web designer", "Politique", "Design");

// class & new
// let Vince = new Profil("Fischer", "Vince", 37, Male, "Développeur web", "Physiologie", "Sport and e-sport");
// let Jamal = new Profil("Taoufiki", "Jamal", 37, Male, "Développeur web", "Pizzas", "Sieste");
// let xbv = new Profil("Bourgeois", "Xavier", 37, Male, "Web designer", "Politique", "Design");

// // Variables
// let noir = #000000;

//Condition de connexion
// let UserLoggedIn = true;
// if (UserLoggedIn) {
//    console.log("Utilisateur connecté!");
// } else {
//    console.log("Alerte, intrus!");
// }


//UNE BELLE FONCTION !!!!!

// const nomDeFunction = (a, b) => {
//     return a+b;
//   }
  
//   let premier = 1;
//   let second = 2;
  
//   let result = nomDeFunction(premier, second);
