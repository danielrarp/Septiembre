
/* =========================================================
   🌻 CONFIGURACIÓN
========================================================= */

// CAMBIA SOLAMENTE ESTE TEXTO
const recipientName = "Esmeralda";


/* =========================================================
   CÓDIGO QUE APARECERÁ EN LA TERMINAL
========================================================= */

const codeLines = [
    "const detalle = new Septiembre();",
    "",
    "detalle.destinatario = \"" + recipientName + "\";",
    "",
    "const flores = [];",
    "",
    "for (let i = 0; i < 4; i++) {",
    "    flores.push(new Flor(\"amarilla\"));",
    "}",
    "",
    "console.log(\"Preparando sorpresa...\");",
    "",
    "await detalle.compilar();",
    "",
    "console.log(\"🌻 Flores listas 🌻\");"
];


/* =========================================================
   ELEMENTOS
========================================================= */

const terminal = document.getElementById("terminal");
const codeContainer = document.getElementById("code");

const garden = document.getElementById("garden");

const recipient =
    document.getElementById("recipient");


/* =========================================================
   ESCRIBIR CÓDIGO COMO TERMINAL
========================================================= */

let lineIndex = 0;
let charIndex = 0;

function typeCode() {

    if (lineIndex >= codeLines.length) {

        setTimeout(showGarden, 1200);

        return;
    }


    const currentLine =
        codeLines[lineIndex];


    // Línea vacía
    if (currentLine === "") {

        codeContainer.innerHTML += "<br>";

        lineIndex++;

        charIndex = 0;

        setTimeout(typeCode, 100);

        return;
    }


    // Crear línea
    if (charIndex === 0) {

        const line =
            document.createElement("div");

        line.classList.add("code-line");

        line.dataset.line = lineIndex;

        codeContainer.appendChild(line);
    }


    const lines =
        codeContainer.querySelectorAll(".code-line");

    const currentElement =
        lines[lines.length - 1];


    currentElement.textContent =
        currentLine.substring(0, charIndex + 1);


    charIndex++;


    if (charIndex < currentLine.length) {

        setTimeout(typeCode, 25);

    } else {

        lineIndex++;

        charIndex = 0;

        setTimeout(typeCode, 120);
    }
}


/* =========================================================
   MOSTRAR JARDÍN
========================================================= */

function showGarden() {

    terminal.style.opacity = "0";

    setTimeout(() => {

        terminal.style.display = "none";

        garden.style.opacity = "1";

        recipient.textContent =
            recipientName;

        setTimeout(() => {

            document
                .getElementById("message")
                .classList.add("show");

        }, 2500);

    }, 1500);
}


/* =========================================================
   INICIAR
========================================================= */

window.addEventListener("load", () => {

    // Pequeña pausa para darle sensación
    // de que el programa está arrancando.

    setTimeout(() => {

        typeCode();

    }, 800);

});
