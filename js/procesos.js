function botonMas() {
    if (document.getElementById('button-more').value == "Más información") {
        document.getElementById('masInfo').style.display = "block";
        document.getElementById("button-more").value = "Ocultar";
    } else {
        document.getElementById('masInfo').style.display = "none";
        document.getElementById("button-more").value = "Más información";
    }
}