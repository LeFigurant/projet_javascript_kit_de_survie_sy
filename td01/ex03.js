
var Personne = {
    nom: "",
    prenom: "",
    dateNaissance: [1, 1, 1977],

    init: function(nom, prenom, dateNaissance){
    this.nom= nom;
    this.prenom= prenom;
    this.dateNaissance = dateNaissance;
    },
   
    };
   
    var pers = Object.create(Personne);
    pers.nom = "Dupont";
    pers.prenom = "Michel";
    pers.dateNaissance = [12, 5, 1971];

    ///////////

var Professeur = Object.create(Personne); // On crée la référence à l’objet Personne
Professeur.mel="monmail@caramail.fr";
Professeur.initProfesseur = function(nom, prenom, dateNaissance, mel){
// On appelle la fonction de l’objet Personne
this.init(nom, prenom, dateNaissance);
this.mel=mel;


}

Professeur.decrire= function(){
    console.log("nom: "+this.nom+" prenom: "+this.prenom+" dateNaissance: "+this.dateNaissance+" mel: "+this.mel);
}

var prof1 = Object.create(Professeur);
prof1.initProfesseur("sensei1", "siesnes1", [17, 11, 1998],"monmel@wanadoo.fr");
prof1.decrire();

var prof2 = Object.create(Professeur);
prof2.initProfesseur("sensei2", "siesnes2", [17, 11, 1998],"monmel@wanadoo.fr");
prof2.decrire();