function ukupnaCijena() {
    var kolicina = document.getElementById("kolicina").value;
    if (kolicina <= 0) {
        alert("Molimo vas da unesete ispravnu količinu.");
        return;
    }
    var cijenaKomponenti = getCijenaKomponenti();
    var total = kolicina * cijenaKomponenti;
    document.getElementById("total").innerHTML = "Ukupno: " + total.toFixed(2) + " KM";
    document.getElementById("kupljeno").innerHTML = "Successfully Purchased!";
    document.getElementById("kupljeno").style.display = "block";
}

function getCijenaKomponenti() {
    cijena = document.getElementById("ukupnaCijena").textContent;
    cijena = cijena.replace(/[^\d.]/g, '');
    console.log(cijena);
    return cijena;
}


