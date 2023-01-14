function sumaReniferow(reniferky) {
    let maxRenifer = 0;
    let obecnyRenifer = 0;
    let listaReniferow = reniferky.split('\n');
    for (let i = 0; i < listaReniferow.length; i++) {
        // usun \r i \n z konca linijki:
        listaReniferow[i] = listaReniferow[i].replace(/\r|\n/g, "")
        if (listaReniferow[i] === "") {
            if (obecnyRenifer > maxRenifer) {
                maxRenifer = obecnyRenifer;
            }
            obecnyRenifer = 0;
        }
        let jedzonko = Number(listaReniferow[i]);
        obecnyRenifer += jedzonko;
    }
    return maxRenifer;
}

document.getElementById('inputfile')
    .addEventListener('change', function () {
        var fr = new FileReader();
        fr.onload = function () {
            const suma = `Najwieksza suma to: ${sumaReniferow(fr.result)}`;
            document.getElementById('output').textContent = suma;
        }
        fr.readAsText(this.files[0]);
    })
