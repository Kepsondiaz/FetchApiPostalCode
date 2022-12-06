class Personne {
     Personne(name, age, sexe) {
        this.name = name
        this.age = age
        this.sexe = sexe
    }
}

var p1 = new Personne("kepson", 22, 'M'); 
console.log(p1.this)