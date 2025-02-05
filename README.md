# Prueba-Amigo-Secreto
# Amigo Secreto - Sorteo de Amigos

Este proyecto es una aplicación web para organizar un sorteo de amigo secreto entre un grupo de personas. Permite agregar los nombres de los participantes, realizar el sorteo y asignar aleatoriamente un amigo secreto a cada persona. La aplicación asegura que no haya repetición de asignaciones y que todos los participantes tengan un amigo secreto de forma equitativa.

## Descripción

La aplicación está construida con HTML, CSS y JavaScript, y permite a los usuarios ingresar sus nombres y realizar un sorteo de amigo secreto. Una vez que todos los nombres han sido añadidos, el sistema asignará un amigo secreto para cada persona de forma aleatoria, respetando las reglas de que nadie puede ser su propio amigo secreto y que las asignaciones deben ser equitativas.

### Funcionalidades

- **Agregar Participantes**: Los usuarios pueden ingresar sus nombres uno a uno en un campo de texto. Cada nombre se agrega a una lista que se muestra en la página.
  
- **Realizar Sorteo**: Al hacer clic en el botón de "Sortear amigo", el sistema selecciona aleatoriamente los amigos secretos para cada participante.

- **Asignación Equitativa**: Si hay un número impar de participantes, la aplicación asegura que cada persona tiene un amigo secreto, y la asignación se ajusta de forma que todos se emparejan correctamente.

- **Mensaje de Error**: Si algo sale mal durante el proceso de sorteo, como un número impar de participantes o un error interno, la aplicación mostrará un mensaje de error para que el usuario pueda reiniciar el sorteo.

## Lógica Matemática

La lógica detrás de la asignación de los amigos secretos es simple pero efectiva. A continuación se describen las funciones matemáticas clave y su implementación:

### Función de Sorteo

La asignación de los amigos secretos se realiza de manera aleatoria utilizando la función `sortearAmigo()`. El proceso se lleva a cabo mediante los siguientes pasos:

1. **Comprobación de Participantes**: Antes de realizar el sorteo, se verifica que haya al menos dos participantes.

2. **Sorteo Aleatorio**: Para asignar el amigo secreto de manera aleatoria, se utiliza el método `Math.random()` en JavaScript. Este método genera un número aleatorio entre 0 y 1. Los participantes se emparejan aleatoriamente utilizando el índice generado por `Math.random()` para seleccionar un amigo de la lista.

3. **Evitar Repeticiones**: Después de realizar el sorteo, se asegura que ningún participante sea asignado como su propio amigo secreto. Esto se logra mediante un simple ciclo que verifica cada asignación y vuelve a intentar si el amigo secreto asignado es el mismo participante.

4. **Asignación Circular**: En el caso de tener un número impar de participantes, se ajusta la asignación para crear una referencia circular, de modo que cada persona sigue siendo asignada a otro, pero respetando las reglas de equidad.

### Funciones Clave:

- `agregarAmigo()`: Agrega un nombre de amigo a la lista de participantes.
- `sortearAmigo()`: Realiza el sorteo, asignando aleatoriamente los amigos secretos a los participantes.
- `limpiarLista()`: Limpia la lista de participantes después de un sorteo exitoso.

## Requisitos

Este proyecto no tiene dependencias externas y puede ser ejecutado directamente en un navegador web. No es necesario instalar ningún software adicional.

## Instrucciones de Uso

1. Clona este repositorio o descarga el archivo HTML.
2. Abre el archivo `index.html` en tu navegador preferido.
3. Ingresa los nombres de tus amigos en el campo de texto y haz clic en "Añadir".
4. Una vez todos los nombres estén en la lista, haz clic en "Sortear amigo" para que el sistema asigne aleatoriamente los amigos secretos.
5. Si ocurre algún error, como un número impar de participantes, el sistema te indicará que debes ajustar la cantidad de participantes.

## Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

## Contribuciones

Si deseas contribuir a este proyecto, por favor realiza un **fork** del repositorio y somete tus cambios mediante un **pull request**. Todas las contribuciones son bienvenidas.

---

Si tienes alguna pregunta, no dudes en contactarme o abrir un *issue* en el repositorio.

