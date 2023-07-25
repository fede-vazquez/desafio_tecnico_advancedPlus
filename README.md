# General

Desafío técnico de org-sistemas-sn, consiste en una app web que cuenta con un sistema de sesiones, donde habrán usuarios tanto administradores como usuarios comunes.

La página contará con un registro, un inicio de sesión, una página principal con un texto (en caso de usuarios comunes) o con una lista de usuarios (en caso de un usuario administrador) y una vista de perfil, donde el usuario podrá ver y actualizar sus datos.
Las vistas pensadas para los administradores solo las podrán ver los mismos.

## Como iniciar

Prender React.js en la carpeta "front-end" con "npm start" - No importa el puerto en el que se prenda.

Prender Express en la carpeta "back-end" con "npm start" - Debe prenderse en el puerto 3001.

## Variables de entorno

### En el front-end tendremos 2 variables de entorno:

1. **REACT_APP_SERVER_URL:** Url del servidor al que se le van a hacer las peticiones. "http://localhost:3001/", si se quiere usar otro hay que cambiarlo.

2. **REACT_APP_DEFAULT_AVATAR_ROUTE:** Ruta a la imagen por defecto de los usuarios.
