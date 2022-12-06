const Persone = {
    name: 'kepson',
    age: 22,
    message: function(){
        'ceci est message de la part de: ' + this.name
    }
}
console.log(Persone.name)
console.log(Persone.message)