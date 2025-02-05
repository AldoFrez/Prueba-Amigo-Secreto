let amigos = [];  // Array para almacenar los nombres

// Función para agregar un amigo
function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nombreAmigo = amigoInput.value.trim();
    
    // Verifica si el nombre no está vacío y si no está repetido
    if (nombreAmigo && !amigos.includes(nombreAmigo)) {
        amigos.push(nombreAmigo);  
        mostrarAmigos();  
        amigoInput.value = '';  
    } else if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya ha sido añadido.");
    } else {
        alert("Por favor, ingrese un nombre.");
    }
}

// Muestra la lista 
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';  // Limpia la lista antes de actualizarla

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Mezclar elementos!
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Intercambia los elementos
    }
}

// Función Sorteo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 personas para sortear un amigo secreto.");
        return;
    }

    // Mezcla aleatoriamente 
    mezclarArray(amigos);

    // Creación de un array de asignaciones aleatorias
    let asignaciones = {};
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let siguienteAmigo = amigos[(i + 1) % amigos.length];  // Asigna de forma cíclica
        asignaciones[amigo] = siguienteAmigo;  // Asigna el siguiente amigo
    }

    // Convertir el objeto de asignaciones a un array de texto para mostrar el resultado
    let resultado = [];
    for (let [amigo, amigoSorteado] of Object.entries(asignaciones)) {
        resultado.push(`${amigo} -> ${amigoSorteado}`);
    }

    // Muestra el resultado del sorteo
    mostrarResultado(resultado);

    // Limpiar la lista de amigos para un nuevo sorteo
    amigos = [];
    mostrarAmigos();
}

// Función para mostrar el resultado en la interfaz
function mostrarResultado(resultado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = '';  

    resultado.forEach(r => {
        const li = document.createElement('li');
        li.textContent = r;
        listaResultado.appendChild(li);
    });
}
