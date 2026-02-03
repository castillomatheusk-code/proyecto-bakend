# proyecto-bakend
sistema de gestion de laboratorio clinico

Instrucciones para Iniciar el Proyecto
Si acabas de descargar el proyecto como un archivo ZIP o lo has clonado mediante Git, sigue estos pasos:

1. Abrir la terminal en la carpeta del proyecto
Asegúrate de estar situado en la raíz del proyecto (donde se encuentra el archivo package.json). Puedes abrir la terminal de VS Code presionando Ctrl + Ñ.

2. Reinstalar las dependencias
Como la carpeta node_modules no está en el repositorio, debes reconstruirla ejecutando el siguiente comando:


npm install

Este comando leerá el archivo package.json y descargará automáticamente todas las librerías necesarias (Express, EJS, etc.).

3. Iniciar el servidor
Una vez que termine la instalación, inicia la aplicación con el comando:

Bash
npm start
Nota: Si configuraste un script de desarrollo con nodemon, puedes usar npm run dev.

4. Acceder en el navegador
Cuando veas en la consola el mensaje ">> Base de datos en memoria inicializada exitosamente", abre tu navegador y escribe: http://localhost:3000
