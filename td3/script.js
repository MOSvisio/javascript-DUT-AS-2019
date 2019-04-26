const regexNom = /^[a-zA-Z]{2,10}$/;
const regexAdresse = /^[a-zA-Z]([-'\s]?[a-zA-Z]){4,99}$/;
const regexVille = /^[a-zA-Z]([-'\s]?[a-zA-Z]){1,49}$/;
const regexCodePostal = /^[0-9]{5}$/;
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexTelephone = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;

function validerFormulaire() {
    let valide = true;

    if (!verifGenre()) {
        valide = false;
    }

    if (!verifNom()) {
        valide = false;
    }

    if (!verifPrenom()) {
        valide = false;
    }

    if (!verifAdresse()) {
        valide = false;
    }

    if (!verifCodePostal()) {
        valide = false;
    }

    if (!verifVille()) {
        valide = false;
    }

    if (!verifEmail()) {
        valide = false;
    }

    if (!verifTel()) {
        valide = false;
    }

    if (!verifMdp()) {
        valide = false;
    }

    if (!verifMdp2()) {
        valide = false;
    }

    if (!verifAcceptation()) {
        valide = false;
    }

    return valide;
}

function verifGenre() {
    if (document.formule.genre.value === 'vide') {
        document.getElementById('champGenre').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champGenre').style.display = 'none';
        return true;
    }
}

function verifNom() {
    if (!document.formule.nom.value.match(regexNom)) {
        document.getElementById('champNom').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champNom').style.display = 'none';
        return true;
    }
}

function verifPrenom() {
    if (!document.formule.prenom.value.match(regexNom)) {
        document.getElementById('champPrenom').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champPrenom').style.display = 'none';
        return true;
    }
}

function verifAdresse() {
    if (!document.formule.adresse.value.match(regexAdresse)) {
        document.getElementById('champAdresse').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champAdresse').style.display = 'none';
        return true;
    }
}

function verifCodePostal() {
    if (!document.formule.codePostal.value.match(regexCodePostal)) {
        document.getElementById('champCodePostal').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champCodePostal').style.display = 'none';
        return true;
    }
}

function verifVille() {
    if (!document.formule.ville.value.match(regexVille)) {
        document.getElementById('champVille').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champVille').style.display = 'none';
        return true;
    }
}

function verifEmail() {
    if (!document.formule.email.value.match(regexEmail)) {
        document.getElementById('champEmail').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champEmail').style.display = 'none';
        return true;
    }
}

function verifTel() {
    if (!document.formule.telephone.value.match(regexTelephone)) {
        document.getElementById('champTel').style.display = 'inline-block';
        return false;
    } else {
        document.getElementById('champTel').style.display = 'none';
        return true;
    }
}

function verifMdp() {
    let correct = true;
    let mdp = document.formule.mdp.value;
    document.getElementById('champMdp').style.display = 'none';

    // on teste la présence de chiffre et de lettres
    if (mdp.search(/\d/) !== -1 && mdp.search(/[a-zA-Z]/) !== -1) {
        document.getElementById('case1').src = 'img/coche.jpg';
    } else {
        correct = false;
        document.getElementById('case1').src = 'img/vide.png';
    }

    // on teste la présence de caractère spécial
    if (mdp.search(/[!#$%&?+=()@*."]/) !== -1) {
        document.getElementById('case2').src = 'img/coche.jpg';
    } else {
        correct = false;
        document.getElementById('case2').src = 'img/vide.png';
    }

    // on teste la longueur du mot de passe
    if (mdp.length >= 5 && mdp.length <= 15) {
        document.getElementById('case3').src = 'img/coche.jpg';
    } else {
        correct = false;
        document.getElementById('case3').src = 'img/vide.png';
    }

    if (!correct) {
        document.getElementById('champMdp').style.display = 'block';
    }

    return correct;
}

function verifMdp2() {
    let correct = true;
    let monChamp = document.getElementById('champMdp2');
    monChamp.style.display = 'block';
    monChamp.innerText = '';

    if (document.formule.mdp2.value === "") {
        correct = false;
        monChamp.innerText += 'La confirmation est obligatoire';
    }

    if (document.formule.mdp.value !== document.formule.mdp2.value) {
        correct = false;
        monChamp.innerText += 'Les mots de passe doivent être identiques.'
    }

    return correct;
}

function verifAcceptation() {
    if (document.formule.accept.checked) {
        document.getElementById('champAcceptation').style.display = 'none';
        return true;
    } else {
        document.getElementById('champAcceptation').style.display = 'inline-block';
        return false;
    }
}
