const nombres = [];

function agregarNombre() {
    const input = document.getElementById("nombreInput");
    const nombre = input.value.trim(); // Elimina espacios extra

    if (nombre === "") {
        alert("⚠️ Por favor, ingresá un nombre válido.");
        return;
    }

    nombres.push(nombre);
    input.value = ""; // Limpia el campo después de agregar
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaNombres");
    lista.innerHTML = nombres.map(n => `<li>${n}</li>`).join("");
}

function sortearNombre() {
    if (nombres.length === 0) {
        alert("⚠️ No hay nombres para sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nombres.length);
    document.getElementById("resultado").innerText = `🎉 El amigo secreto es: ${nombres[indiceSorteado]}`;
}

