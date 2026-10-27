function seleccionarEjercicio(idSeccion, botonElemento) {
    document.querySelectorAll(".seccion-ejercicio").forEach(seccion => {
        seccion.classList.remove("activo-card");
    });

    document.getElementById(idSeccion).classList.add("activo-card");

    document.querySelectorAll(".menu-btn").forEach(boton => {
        boton.classList.remove("activo");
    });

    botonElemento.classList.add("activo");
}

// EJERCICIO 1: CAMELLOS
document.getElementById("formCamellos").addEventListener("submit", function (event) {
    event.preventDefault();

    const total = Number(document.getElementById("totalCamellos").value);
    const salida = document.getElementById("resultadoCamellos");

    if (!Number.isSafeInteger(total) || total < 1) {
        salida.textContent = "Introduce una cantidad entera válida.";
        return;
    }

    const totalTemporal = total + 1;
    const mitad = Math.floor(totalTemporal / 2);
    const tercio = Math.floor(totalTemporal / 3);
    const noveno = Math.floor(totalTemporal / 9);
    const sobrante = totalTemporal - mitad - tercio - noveno;

    salida.innerHTML = `
        <p><strong>RESULTADO DEL REPARTO</strong></p>
        <p>Camellos iniciales: ${total}</p>
        <p>Se añade temporalmente un camello: ${totalTemporal}</p>
        <ul>
            <li>Primer heredero (1/2): ${mitad}</li>
            <li>Segundo heredero (1/3): ${tercio}</li>
            <li>Tercer heredero (1/9): ${noveno}</li>
            <li>Sobrante: ${sobrante}</li>
        </ul>
    `;
});

// EJERCICIO 2: VASIJAS
document.getElementById("formVasijas").addEventListener("submit", function (event) {
    event.preventDefault();

    const total = Number(document.getElementById("totalVasijas").value);
    const salida = document.getElementById("resultadoVasijas");

    if (!Number.isSafeInteger(total) || total < 3 || total % 3 !== 0) {
        salida.textContent = "Introduce un número entero, mayor o igual a 3 y múltiplo de 3.";
        return;
    }

    const porTipo = total / 3;
    const llenas = Math.floor(porTipo / 3);
    const medias = porTipo - 2 * llenas;
    const vacias = llenas;

    salida.innerHTML = `
        <p><strong>DISTRIBUCIÓN DE VASIJAS</strong></p>
        <p>Total: ${total} vasijas.</p>
        <p>Hay ${porTipo} vasijas llenas, ${porTipo} mediadas y ${porTipo} vacías para repartir entre tres socios.</p>
        <ul>
            <li>Socio 1: ${llenas} llenas, ${medias} mediadas y ${vacias} vacías.</li>
            <li>Socio 2: ${llenas} llenas, ${medias} mediadas y ${vacias} vacías.</li>
            <li>Socio 3: ${llenas} llenas, ${medias} mediadas y ${vacias} vacías.</li>
        </ul>
        <p>La distribución anterior se aplica cuando la cantidad de cada tipo de vasija es compatible con el reparto.</p>
    `;
});

// EJERCICIO 3: ECUACIÓN CUADRÁTICA
document.getElementById("formQuad").addEventListener("submit", function (event) {
    event.preventDefault();

    const a = Number(document.getElementById("valA").value);
    const b = Number(document.getElementById("valB").value);
    const c = Number(document.getElementById("valC").value);
    const salida = document.getElementById("resultado12");

    if (![a, b, c].every(Number.isFinite) || a === 0) {
        salida.textContent = "Introduce valores válidos y asegúrate de que a sea distinto de cero.";
        return;
    }

    const discriminante = b * b - 4 * a * c;

    if (discriminante > 0) {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

        salida.innerHTML = `
            <p><strong>Resultado:</strong> dos raíces reales.</p>
            <p>x₁ = ${x1.toFixed(6)}</p>
            <p>x₂ = ${x2.toFixed(6)}</p>
        `;
    } else if (discriminante === 0) {
        const x = -b / (2 * a);
        salida.innerHTML = `<p><strong>Resultado:</strong> raíz doble x = ${x.toFixed(6)}</p>`;
    } else {
        salida.textContent = "La ecuación no tiene raíces reales.";
    }
});

// EJERCICIO 4: ESTIMACIÓN DE PI
document.getElementById("formPi").addEventListener("submit", function (event) {
    event.preventDefault();

    const n = Number(document.getElementById("valN").value);
    const salida = document.getElementById("resultado13");

    if (!Number.isSafeInteger(n) || n < 1 || n > 1000000) {
        salida.textContent = "Introduce un número entero entre 1 y 1000000.";
        return;
    }

    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += 1 / (i * i);
    }

    const pi = Math.sqrt(6 * suma);
    const diferencia = Math.abs(pi - Math.PI);

    salida.innerHTML = `
        <p><strong>RESULTADO</strong></p>
        <p>Iteraciones: ${n}</p>
        <p>Valor estimado de π: ${pi.toFixed(10)}</p>
        <p>Valor de referencia: ${Math.PI.toFixed(10)}</p>
        <p>Diferencia: ${diferencia.toExponential(6)}</p>
    `;
});
