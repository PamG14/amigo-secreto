const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios extra

    if (nombre === "") {
        alert("⚠️ Por favor, ingresá un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // Limpia el campo después de agregar
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(nombre => `<li>${nombre}</li>`).join("");
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("⚠️ No hay nombres para sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigos[indiceSorteado]}</strong></li>`;
}


