const Persone = {
    name: 'kepson',
    age: 22,
    message: () => {
        'ceci est message de la part de: ' + this.name
    }

}
console.log(Persone.name)