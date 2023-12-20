function ukupnaCijena() {
    var kolicina = document.getElementById("kolicina").value;
    if (kolicina <= 0) {
        alert("Enter correct quantity.");
        return;
    }
    var cijenaKomponenti = getCijenaKomponenti();
    var total = kolicina * cijenaKomponenti;
    document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " KM";
    document.getElementById("kupljeno").innerHTML = "Successfully Purchased!";
    document.getElementById("kupljeno").style.display = "block";
}

function getCijenaKomponenti() {
    cijena = document.getElementById("ukupnaCijena").textContent;
    cijena = cijena.replace(/[^\d.]/g, '');
    console.log(cijena);
    return cijena;
}


