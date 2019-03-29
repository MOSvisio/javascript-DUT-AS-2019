const HAUTEUR = 600;
const LARGEUR = 400;
const ESPACE = 4;

function estDansLeCancas(x, y) {
    return x > 0 && x < HAUTEUR && y > 0 && y < HAUTEUR;
}

$('#canvas').on('click', function (e) {
    const coordonneeBordureGauche = this.offsetLeft;
    const coordonneeBordureHaut = this.offsetTop;

    console.log(e.pageX - coordonneeBordureGauche, e.pageY - coordonneeBordureHaut);
    this.innerHTML = '';

    // une direction [x, y]
    let directions = {
        'horizontal': [1, 0], // on monte ou descend
        'vertical': [0, 1], // on va de gauche à droite
        //'diagonale': [1, 1], // diagonale haut
        //'antidiagonale': [-1, 1]
    };

    // pour chacune des 4 directions
    for (let direction in directions) {
        for (let i = -LARGEUR/2; i < LARGEUR/2; i++) {
            // les coordonnées du prochain point
            // calculées par rapport au coin supérieur gauche du canvas
            let x = e.pageX - coordonneeBordureGauche + ESPACE * i * directions[direction][0];
            let y = e.pageY - coordonneeBordureHaut + ESPACE * i * directions[direction][1];

            // si le point est à l'intérieur du conteneur, on l'ajoute au canvas
            if (estDansLeCancas(x, y)) {
                let point = document.createElement('span');
                point.style.left = x + 'px';
                point.style.top = y + 'px';
                this.appendChild(point);
            }
        }
    }
});
