

document.querySelector('#codepostal').addEventListener('input', function() {
    if(this.value.length==5) {
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&zone=metro&fields=nom,code,codesPostaux,siren,codeEpci,codeDepartement,codeRegion,population&format=json&geometry=centre`

        fetch(url).then((response) => 
        response.json()).then((data) => 
        {
            console.log(data);
            let affichage = '<ul>';
            for(villes of data)
            {
                affichage += `<li><strong>${villes.nom}</strong> - ${villes.population} Habitants</li>`;
            }
            affichage +='</ul>';
            document.querySelector('#ville').innerHTML = affichage; 
        }
        
        )
    }
})
