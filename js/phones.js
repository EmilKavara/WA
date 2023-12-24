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
    document.getElementById("showTotal").style.display="none";
    
}

function getCijenaKomponenti() {
    cijena = document.getElementById("ukupnaCijena").textContent;
    cijena = cijena.replace(/[^\d.]/g, '');
    console.log(cijena);
    return cijena;
}

document.getElementById('kolicina').addEventListener('input', function() {
    var inputValue = parseFloat(this.value); 
    var showTotalElement = document.getElementById("showTotal");

    if (inputValue < 2) {
        showTotalElement.style.display = "none";
        return; 
    }

    var cijenaKomponenti = getCijenaKomponenti();
    var total = inputValue * cijenaKomponenti;

    showTotalElement.innerHTML = "Total: " + total.toFixed(2) + " KM";
    showTotalElement.style.display = "block";

    console.log(inputValue);
});



