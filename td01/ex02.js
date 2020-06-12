function Etudiant(prenom, nom, numEtudiant, annee, mois, jour){
    this.nom = nom;
    this.prenom = prenom;
    this.numEtudiant = numEtudiant;
    this.dateNaissance = [jour, mois, annee];
    this.presenter = function(){
        console.log("Je suis " + this.prenom + " " + this.nom+" mon numéro étudiant est le "+this.numEtudiant+" et je suis née le "+this.dateNaissance );
    }
    //form annee/mois/jour
    this.age= function(){
        var today = new Date();
        var age = today.getFullYear() - this.dateNaissance[0];
        var m = today.getMonth() - this.dateNaissance[1];
        if (m < 0 || (m === 0 && today.getDate() < this.dateNaissance[0])) {
            age--;
        }
    return age;
}
           
}
    
    var pers = new Etudiant("Yoann", "SINGER", "42",17,11,1998);
    pers.presenter();
    var age=pers.age();
    console.log("age: "+age);
