/* =========================================
   ESTRELLAS
========================================= */

const space = document.getElementById("space");

for (let i = 0; i < 130; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    space.appendChild(star);
}


/* =========================================
   GIRASOLES ORBITANDO
========================================= */

const orbits =
    document.querySelectorAll(".orbit");

const flowerCounts = [
    7,
    9,
    11,
    13,
    16
];

orbits.forEach((orbit, index) => {

    const amount =
        flowerCounts[index];

    for (let i = 0; i < amount; i++) {

        const flower =
            document.createElement("div");

        flower.className =
            "orbit-flower";

        flower.textContent =
            Math.random() > .25
                ? "🌻"
                : "✦";

        const angle =
            (360 / amount) * i;

        const x =
            Math.cos(angle * Math.PI / 180) * 50;

        const y =
            Math.sin(angle * Math.PI / 180) * 50;

        flower.style.left =
            `calc(50% + ${x}% - 17px)`;

        flower.style.top =
            `calc(50% + ${y}% - 17px)`;

        orbit.appendChild(flower);
    }

});


/* =========================================
   CAMBIO DE PANTALLA
========================================= */

const screen1 =
    document.getElementById("screen1");

const screen2 =
    document.getElementById("screen2");


document
    .getElementById("start")
    .addEventListener("click", () => {

        screen1.classList.remove("active");
        screen1.classList.add("hidden");

        setTimeout(() => {

            screen2.classList.remove("hidden");
            screen2.classList.add("active");

            escribirCarta();

            lluvia();

        }, 500);

    });


/* Volver */

document
    .getElementById("back")
    .addEventListener("click", () => {

        screen2.classList.remove("active");
        screen2.classList.add("hidden");

        screen1.classList.remove("hidden");
        screen1.classList.add("active");

    });


/* =========================================
   CARTA
========================================= */

const mensaje = `
Hoy quería regalarte algo diferente. 🌻

No solamente unas flores,
sino todo un pequeño universo lleno de ellas.

Porque a veces un detalle no tiene que ser enorme
para significar algo.

Solo quería recordarte que eres una persona
especial y que espero que siempre tengas
razones para sonreír.

Así que aquí tienes unas cuantas flores amarillas,
un pequeño universo hecho especialmente para ti. 💛

Espero que este detalle te guste
y que te saque aunque sea una pequeña sonrisa.

Gracias por ser una buena amiga.

Nunca dejes de brillar. ✨

Con cariño,
un amigo que te aprecia mucho. 💙
`;


const texto =
    document.getElementById("texto");


function escribirCarta() {

    texto.innerHTML = "";

    let i = 0;

    function escribir() {

        if (i < mensaje.length) {

            const letra =
                mensaje.charAt(i);

            texto.innerHTML +=
                letra === "\n"
                    ? "<br>"
                    : letra;

            i++;

            setTimeout(
                escribir,
                28
            );
        }
    }

    escribir();
}


/* =========================================
   LLUVIA DE FLORES
========================================= */

function lluvia() {

    for (let i = 0; i < 55; i++) {

        setTimeout(() => {

            const flower =
                document.createElement("div");

            flower.className =
                "falling";

            flower.textContent =
                Math.random() > .2
                    ? "🌻"
                    : "💛";

            flower.style.left =
                Math.random() * 100 + "vw";

            flower.style.fontSize =
                14 +
                Math.random() * 22 +
                "px";

            flower.style.animationDuration =
                3 +
                Math.random() * 5 +
                "s";

            document.body.appendChild(
                flower
            );

            setTimeout(() => {

                flower.remove();

            }, 8000);

        }, i * 100);
    }
}


/* =========================================
   GUARDAR RESPUESTA
========================================= */

const respuesta =
    document.getElementById("respuesta");

const result =
    document.getElementById("replyResult");


document
    .getElementById("send")
    .addEventListener("click", () => {

        const textoRespuesta =
            respuesta.value.trim();


        if (!textoRespuesta) {

            respuesta.focus();

            return;
        }


        /*
            Guarda la respuesta
            en el navegador.
        */

        localStorage.setItem(
            "respuesta_flores",
            textoRespuesta
        );


        result.style.display =
            "block";

        result.innerHTML =
            "🌻 Respuesta guardada. " +
            "Gracias por tomarte el tiempo " +
            "de escribirla. 💛";


        lluvia();

    });


/* =========================================
   RECUPERAR RESPUESTA
========================================= */

const guardada =
    localStorage.getItem(
        "respuesta_flores"
    );


if (guardada) {

    respuesta.value =
        guardada;

} 
