function popup(total) {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup-container').style.display = 'block';
    document.getElementById('kupljeno').innerHTML="Total: " + total.toFixed(2) + " KM";
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup-container').style.display = 'none';
}