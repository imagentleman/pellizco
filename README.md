# pelllizco
Librería que da soporte a gestos de zoom mediante pellizcos

## Tamaño
Pesa 838 bytes minificado y 409 bytes comprimido con gzip.

## Instalación

### Browser
* Descarga la versión UMD de la librería (https://github.com/imagentleman/pelllizco/blob/master/dist/pellizco.umd.min.js).
* Agrega el script como se muestra en el ejemplo que incluye la librería (https://github.com/imagentleman/pelllizco/blob/master/dist/index.html)

### Node
La carpeta ```dist``` incluye versiones de CommonJS y ES2015 para ser utilizadas desde Node (https://github.com/imagentleman/pelllizco/tree/master/dist).

## Ejemplo de Uso 
https://github.com/imagentleman/pelllizco/blob/master/dist/index.html

    <!doctype html>

    <title>Pellizco - Eventos de Gestos de Zoom con 2 dedos</title>

    <style>
      html {
        touch-action: none;
      }

      html,
      body {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        margin: 0;
        width: 100vw;
      }

      .pinchin {
        background-color: pink;
      }

      .pinchout {
        background-color: lightblue;
      }
    </style>

    <h1>Pellízcame!</h1>

    <p></p>

    <script src=pellizco.umd.js></script>

    <script>
      // Inicializa la librería, la cual empezará a escuchar los eventos:
      // "pinchin" o "pinchout"
      pellizco();

      var message = document.querySelector("p");

      document.body.addEventListener("pinchin", function() {
        message.textContent = "pinchin (hicimos zoom!)";
        message.classList = "";
        message.classList.add("pinchin");
      });

      document.body.addEventListener("pinchout", function() {
        message.textContent = "Evento pinchout (deshicimos el zoom!)";
        message.classList = "";
        message.classList.add("pinchout");
      });
    </script>
