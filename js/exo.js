console.log(test1)

let profile = {
    name: "Hercule",
    job: "Demi-dieu",
    age: 35,
    department: 75,
    arm: 60.5,
    inRelationship: true
  };
  
  base.fillProfil(profile);
  console.log(profile)

  let friends = ["Jupiter", "Junon", "Alcmène", "Déjanire"];
  console.log("Amis d'Hercule :", friends);

  base.printFriends(friends);
  base.displayBestFriend(friends[0]);


  let title = document.createElement("h1");
title.className = "banner__title";
title.textContent = "Vous consultez le profil de Hercule";

let headerBanner = document.getElementById("header-banner");
headerBanner.appendChild(title);

// Récupération de l'élément HTML pour afficher la disponibilité
const availabilityElement = document.getElementById('availability');

// Récupération de l'heure actuelle avec la méthode getHour de l'objet base
const currentHour = base.getHour();

// Condition pour afficher la disponibilité d'Hercule
if (currentHour >= 8 && currentHour < 20) {
  availabilityElement.textContent = 'Disponible';
} else {
  availabilityElement.textContent = 'Non disponible';
  availabilityElement.classList.add('off');
}

function generatePseudo(firstName, departnum) {
    return `${prenom}-du-${departnum}`;
  }

  const firstName = 'toto';
const departmentNumber = 10;

const pseudo = generatePseudo(prenom, departnum);

document.getElementById('profil-name').textContent = pseudo;

const menuToggler = document.getElementById('menu-toggler');
const headerBanner = document.getElementById('header-banner');

menuToggler.addEventListener('click', function() {
  if (headerBanner.classList.contains('banner--open')) {
    headerBanner.classList.remove('banner--open');
  } else {
    headerBanner.classList.add('banner--open');
  }
});


