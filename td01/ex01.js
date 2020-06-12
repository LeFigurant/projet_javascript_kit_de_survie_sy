    var Etudiant = {
        prenom: "Yoann",
        nom:"SINGER",
        numEtudiant:"42",
        dateNaissance: ["1998", "11", "1998"],
        presenter: function(){
        console.log("Je suis " + this.prenom + " " + this.nom
        + ", numEtud: " +this.numEtudiant);
        }
        };






        
        
        function checkPassword(password) {
            if (password.length != 16) {
                return false;
            }
            for (var k=0; k<password.length; k++) {
                var c = password.charCodeAt(k);
                if (c != b[k]-a[k]) {
                    return false;
                }
            }
            return true;
        }
        $(document).ready(function() {
            $('form').submit(function(event) {
                event.preventDefault();
                var pass = $('.pass').val();
                if (checkPassword(pass)) {
                    alert('Bravo!');
                } else {
                    alert('Mauvais mot de passe!');
                }
                return false;
            });
        });
    
