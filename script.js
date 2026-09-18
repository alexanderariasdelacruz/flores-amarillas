// ========================================
// ELEMENTOS
// ========================================

const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");

const game = document.getElementById("game");

const letter = document.getElementById("letter");
const key = document.getElementById("key");

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

const actionBtn = document.getElementById("actionBtn");
const closeBtn = document.getElementById("closeBtn");

const final = document.getElementById("final");

const finalText = document.getElementById("finalText");


// ========================================
// ESTADO DEL JUEGO
// ========================================

let etapa = 0;


// ========================================
// ESTRELLAS
// ========================================

const stars = document.getElementById("stars");

for (let i = 0; i < 150; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    stars.appendChild(star);
}


// ========================================
// COMENZAR
// ========================================

startBtn.addEventListener("click", () => {

    intro.classList.add("hidden");

    game.classList.remove("hidden");

});


// ========================================
// ABRIR CARTA
// ========================================

letter.addEventListener("click", () => {

    letter.classList.add("hidden");

    modalContent.innerHTML = `

        <h2>💌 La primera pista</h2>

        <p>
            Si estás leyendo esto, significa que
            aceptaste la misión.
            <br><br>

            Pero antes de buscar cualquier cofre,
            necesitas algo.
            <br><br>

            <b>Una llave.</b>
            <br><br>

            La encontrarás aquí mismo.
        </p>

    `;

    actionBtn.innerText =
        "Tomar la llave 🔑";

    modal.classList.remove("hidden");

    etapa = 1;

});


// ========================================
// BOTÓN DEL MODAL
// ========================================

actionBtn.addEventListener("click", () => {

    modal.classList.add("hidden");

    if (etapa === 1) {

        key.classList.remove("hidden");

        etapa = 2;

    }

});


// ========================================
// TOMAR LLAVE
// ========================================

key.addEventListener("click", () => {

    key.classList.add("hidden");

    modalContent.innerHTML = `

        <h2>🔑 Primera llave obtenida</h2>

        <p>

            Ahora comienza realmente la búsqueda.

            <br><br>

            Hay tres cofres.

            <br><br>

            Pero solamente uno puede ser
            abierto con esta llave.

            <br><br>

            Resuelve el acertijo.

            <br><br>

            <b>
            "No tengo pies, pero siempre avanzo.
            <br>
            No tengo boca, pero cuento historias.
            <br>
            Todos me miran,
            <br>
            pero nadie puede detenerme."
            </b>

            <br><br>

            ¿Qué soy?

        </p>

    `;

    actionBtn.innerText =
        "Ya sé la respuesta";

    modal.classList.remove("hidden");

    etapa = 3;

});


// ========================================
// COFRES
// ========================================

const chests =
    document.querySelectorAll(".chest");


chests.forEach(chest => {

    chest.addEventListener("click", () => {

        const id =
            chest.dataset.id;


        // ------------------------------
        // COFRE 1
        // ------------------------------

        if (id === "1" && etapa === 3) {

            abrirCofre(chest);

            setTimeout(() => {

                modalContent.innerHTML = `

                    <h2>⏳ ¡Correcto!</h2>

                    <p>

                        La respuesta era:

                        <br><br>

                        <b>EL TIEMPO.</b>

                        <br><br>

                        El primer cofre se abre.

                        <br><br>

                        Pero dentro no hay un tesoro...

                        <br><br>

                        Hay otra pista.

                        <br><br>

                        <b>
                        "Cuando la noche termina,
                        aparezco sin que nadie me llame.
                        No puedes tocarme,
                        pero anuncio un nuevo comienzo."
                        </b>

                        <br><br>

                        ¿Qué soy?

                    </p>

                `;

                actionBtn.innerText =
                    "Seguir la búsqueda";

                modal.classList.remove("hidden");

                etapa = 4;

            }, 600);

        }


        // ------------------------------
        // COFRE 2
        // ------------------------------

        else if (id === "2" && etapa === 4) {

            abrirCofre(chest);

            setTimeout(() => {

                modalContent.innerHTML = `

                    <h2>🌅 ¡Otra vez acertaste!</h2>

                    <p>

                        La respuesta era:

                        <br><br>

                        <b>EL AMANECER.</b>

                        <br><br>

                        Ya estás muy cerca.

                        <br><br>

                        Pero falta una última puerta.

                        <br><br>

                        Busca el cofre que no tiene número.

                        <br><br>

                        El que parece estar esperando
                        solamente por ti.

                    </p>

                `;

                actionBtn.innerText =
                    "Ir al último cofre";

                modal.classList.remove("hidden");

                etapa = 5;

            }, 600);

        }


        // ------------------------------
        // COFRE FINAL
        // ------------------------------

        else if (id === "3" && etapa === 5) {

            abrirCofre(chest);

            setTimeout(() => {

                modalContent.innerHTML = `

                    <h2>🏆 Último acertijo</h2>

                    <p>

                        Esta es la última pregunta.

                        <br><br>

                        No soy un tesoro,

                        <br>

                        pero puedo hacer que
                        un día normal se sienta diferente.

                        <br><br>

                        No peso nada.

                        <br>

                        No cuesta necesariamente nada.

                        <br>

                        Y cuando se comparte,
                        puede quedarse en la memoria.

                        <br><br>

                        <b>
                        ¿Qué soy?
                        </b>

                    </p>

                `;

                actionBtn.innerText =
                    "Descubrir la sorpresa";

                modal.classList.remove("hidden");

                etapa = 6;

            }, 600);

        }

    });

});


// ========================================
// ABRIR COFRE
// ========================================

function abrirCofre(chest) {

    const lock =
        chest.querySelector(".lock");

    lock.innerText = "🔓";

    chest.style.transform =
        "scale(1.12)";

    setTimeout(() => {

        chest.style.transform = "";

    }, 400);

}


// ========================================
// CONTINUAR DESDE ÚLTIMO ACERTIJO
// ========================================

actionBtn.addEventListener("click", () => {

    if (etapa === 6) {

        modal.classList.add("hidden");

        mostrarFinal();

    }

});


// ========================================
// CERRAR MODAL
// ========================================

closeBtn.addEventListener("click", () => {

    modal.classList.add("hidden");

});


// ========================================
// FINAL
// ========================================

function mostrarFinal() {

    final.classList.remove("hidden");

    const texto =

        "Después de tanto buscar, " +
        "resolver acertijos y abrir cofres... " +
        "resulta que el tesoro era simplemente " +
        "un pequeño detalle para hacerte sonreír. " +
        "😂💛";

    escribirTexto(texto);

    comenzarLluviaDeFlores();

}


// ========================================
// TEXTO ANIMADO
// ========================================

function escribirTexto(texto) {

    finalText.innerHTML = "";

    let i = 0;

    const escribir = setInterval(() => {

        finalText.innerHTML +=
            texto.charAt(i);

        i++;

        if (i >= texto.length) {

            clearInterval(escribir);

        }

    }, 40);

}


// ========================================
// LLUVIA DE FLORES
// ========================================

function comenzarLluviaDeFlores() {

    setInterval(() => {

        const flower =
            document.createElement("div");

        flower.className =
            "flower";

        flower.innerText = "🌻";

        flower.style.left =
            Math.random() * 100 + "vw";

        flower.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        flower.style.fontSize =
            (30 + Math.random() * 30) + "px";

        document.getElementById("flowers")
            .appendChild(flower);

        setTimeout(() => {

            flower.remove();

        }, 10000);

    }, 300);

}
