var triggerMore = false;

function botonMas() {
    document.getElementById('masInfo').style.display = "block";

    if (document.getElementById('button-more').clicked == true) {
        document.getElementById('masInfo').style.display = "none";
        triggerMore = true;
    }
}