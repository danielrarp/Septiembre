/* =========================================================
   CONFIGURACIÓN
========================================================= */

let recipientName = "";


/* =========================================================
   ELEMENTOS
========================================================= */

const nameScreen = document.getElementById("nameScreen");
const nameInput = document.getElementById("nameInput");

const terminal = document.getElementById("terminal");
const codeContainer = document.getElementById("code");

const garden = document.getElementById("garden");
const recipient = document.getElementById("recipient");


/* =========================================================
   PEDIR NOMBRE
========================================================= */

nameInput.focus();

nameInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        const nombre = nameInput.value.trim();

        if (nombre === "") {
            nameInput.focus();
            return;
        }

        recipientName = nombre;

        // Ocultar pantalla de nombre
        nameScreen.classList.add("hide");

        // Mostrar terminal después de un pequeño efecto
        setTimeout(() => {

            nameScreen.style.display = "none";

            terminal.style.display = "flex";
            terminal.style.opacity = "1";

            iniciarCodigo();

        }, 800);
    }

});


/* =========================================================
   CÓDIGO QUE APARECERÁ EN LA TERMINAL
========================================================= */

function obtenerCodigo() {

    return [

        "const detalle = new Septiembre();",

        "",

        "detalle.destinatario = \"" +
        recipientName +
        "\";",

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

}


/* =========================================================
   ESCRIBIR CÓDIGO
========================================================= */

let codeLines = [];

let lineIndex = 0;

let charIndex = 0;


function iniciarCodigo() {

    codeLines = obtenerCodigo();

    lineIndex = 0;

    charIndex = 0;

    codeContainer.innerHTML = "";

    setTimeout(typeCode, 500);
}


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

        codeContainer.appendChild(line);
    }


    const lines =
        codeContainer.querySelectorAll(".code-line");


    const currentElement =
        lines[lines.length - 1];


    currentElement.textContent =
        currentLine.substring(
            0,
            charIndex + 1
        );


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
   MOSTRAR FLORES
========================================================= */

function showGarden() {

    terminal.style.opacity = "0";


    setTimeout(() => {

        terminal.style.display = "none";

        garden.style.opacity = "1";


        // Poner nombre
        recipient.textContent =
            recipientName;


        setTimeout(() => {

            document
                .getElementById("message")
                .classList.add("show");

        }, 2500);

    }, 1500);

}