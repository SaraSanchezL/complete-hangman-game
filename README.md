Made With React 🌟

# Hangman Game (Now only Multiplayer Version!) 🎮 .  

## Visita la pestaña ¿Cómo se Juega? para ver opciones de juego.

- Modo Multijugador -> Un jugador escribe una palabra a adivinar, un segundo jugador trata de descubrir qué palabra es. 
- Modo Un Jugador (Temporalmente no disponible, API no operativa) -> Recibe una palabra aleatoria de una API, y el jugador trata de adivinarla.

### Pair 4 / Sprint 2
Ejercicio de pair programming.
- [Sara Sánchez](https://github.com/SaraSanchezL)
- [Mara Rocha](https://github.com/mararochafernandez)

## Descripción de las principales funciones
Se realiza juego del ahorcado, se entrega base de HTML y SCSS para, partiendo de ahí, meter funcionalidades con React. 
  - Se realiza la petición a la API, se guarda la respuesta en variable estado. 
  - Se crea evento para las letras que introduce el usuario. En caso de fallar se pintan en letras falladas y las líneas del muñeco aumentan. En caso de acertar se pintan en la solución. Todo ello guardandolas en una variable estado y comparando con el paso anterior. 
  - Se crean componentes para la cabecera, muñeco, solución, letras falladas y formulario con las letras del usuario.
  - Se utilizan rutas para las distintas secciones de la aplicación. Se crea el menú y las páginas estáticas. 
  - Se añade un modo de juego que permite establecer la palabra a adivinar (modo multijugador).  
  - Se añade un Loader que se activa cuando espera la respuesta a la petición. 

### Check de Funciones

- [x] Crear repositorio.
- [x] Elegir con qué ejercicio continuar o mezclar ambos
- [x] Subir el código al repositorio
- [x] Ejercicio: componentizar la cabecera
- [x] Ejercicio: componentizar el muñeco
- [x] Ejercicio: componentizar la solución
- [x] Ejercicio: componentizar las letras falladas
- [x] Ejercicio: componentizar el formulario
- [x] Ejercicio: instalar y configurar React Router DOM
- [x] Ejercicio: crear el menú
- [x] Ejercicio: crear las páginas estáticas
- [x] Ejercicio: publicar en GitHub Pages
- [x] Ejercicio: cambiar la palabra a adivinar
- [x] Ejercicio: añadir un loader al arrancar
- [ ] Ejercicio: añadir las defaultProps
- [ ] Ejercicio: añadir las PropTypes
- [x] Ejercicio: hacer destructuring de las props
- [ ] Ejercicio: ES6 katas

---

_Happy coding!_
