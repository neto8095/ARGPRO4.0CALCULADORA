document.addEventListener("DOMContentLoaded", function() {
    const numero1Input = document.getElementById("numero1");
    const numero2Input = document.getElementById("numero2");
    const resultadoDiv = document.getElementById("resultado");

    function validarEntradas() {
        const numero1 = parseFloat(numero1Input.value);
        const numero2 = parseFloat(numero2Input.value);

        const validacion = (!isNaN(numero1) && !isNaN(numero2) && numero1 !== "" && numero2 !== "") ? true : false;

        if (!validacion) {
            resultadoDiv.textContent = "Por favor, ingresa valores numéricos en ambos campos.";
        }

        return validacion;
    }

    function realizarOperacion(operacion) {
        if (validarEntradas()) {
            const numero1 = parseFloat(numero1Input.value);
            const numero2 = parseFloat(numero2Input.value);

            let resultado;
            switch (operacion) {
                case 'sumar':
                    resultado = numero1 + numero2;
                    break;
                case 'restar':
                    resultado = numero1 - numero2;
                    break;
                case 'multiplicar':
                    resultado = numero1 * numero2;
                    break;
                case 'dividir':
                    if (numero2 === 0) {
                        resultadoDiv.textContent = "No se puede dividir por 0";
                        return;
                    }
                    resultado = numero1 / numero2;
                    break;
                default:
                    resultado = "Operación no válida";
            }

            resultadoDiv.textContent = `Resultado: ${resultado}`;
        }
    }

    document.getElementById("sumar").addEventListener("click", function() {
        realizarOperacion('sumar');
    });

    document.getElementById("restar").addEventListener("click", function() {
        realizarOperacion('restar');
    });

    document.getElementById("multiplicar").addEventListener("click", function() {
        realizarOperacion('multiplicar');
    });

    document.getElementById("dividir").addEventListener("click", function() {
        realizarOperacion('dividir');
    });
});
