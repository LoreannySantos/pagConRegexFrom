const regexNombre = /^[a-zA-ZÀ-ÿ]+\s[a-zA-ZÀ-ÿ]+\s[a-zA-ZÀ-ÿ]+$/;
const regexDni = /^\d{8}[a-zA-Z]$/;
const regexCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regexTlfn = /^\d{9}$/;
const regexNum = /^\d{1,99}$/;

var frm = document.getElementById("form");
var inputs = document.getElementsByTagName('input');
function validarFormulario(e) {
    e.preventDefault();
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == null || inputs[i].value == "") {
            inputs[i].classList.add("is-danger");
        } else if (inputs[i].value != null || inputs[i].value != "") {
            switch (inputs[i].name) {
                case "nombreCompleto":
                    if (regexNombre.test(inputs[i].value)) {
                        inputs[i].classList.remove("is-danger");
                        inputs[i].classList.add("is-success");

                    } else {
                        inputs[i].classList.add("is-danger");
                        inputs[i].classList.remove("is-success");
                    }
                    break;
                case "dni":
                    if (regexDni.test(inputs[i].value)) {
                        inputs[i].classList.remove("is-danger");
                        inputs[i].classList.add("is-success");
                    } else {
                        inputs[i].classList.add("is-danger");
                        inputs[i].classList.add("is-success");
                    }
                    break;
                case "email":
                    if (regexCorreo.test(inputs[i].value)) {
                        inputs[i].classList.remove("is-danger");
                        inputs[i].classList.add("is-success");
                    } else {
                        inputs[i].classList.add("is-danger");
                        inputs[i].classList.add("is-success");
                    }
                    break;
                case "confirmar":
                    if (inputs[i].value == inputs[i - 1].value) {
                        inputs[i].classList.remove("is-danger");
                        inputs[i].classList.add("is-success");
                    } else {
                        inputs[i].classList.add("is-danger");
                        inputs[i].classList.add("is-success");
                    }
                    break;
                case "telefono":
                    if (regexTlfn.test(inputs[i].value)) {
                        inputs[i].classList.remove("is-danger");
                        inputs[i].classList.add("is-success");
                    } else {
                        inputs[i].classList.add("is-danger");
                        inputs[i].classList.add("is-success");
                    }
                    break;
                case "numEntrada":
                    if (regexNum.test(inputs[i].value)) {
                        inputs[i].classList.remove("is-danger");
                        inputs[i].classList.add("is-success");
                    } else {
                        inputs[i].classList.add("is-danger");
                        inputs[i].classList.add("is-success");
                    }
                    break;
            }
        }
    }
}
frm.addEventListener("submit", validarFormulario, false);

var btnBorrar = document.getElementById("btnBorrar");
btnBorrar.addEventListener("click", function () {
    frm.reset();
    inputs.forEach((e )=> {
        e.classList.remove("is-danger");
    });
});

var btnPrecio = document.getElementById("btnPrecio");
btnPrecio.addEventListener("click", function(){
    var num = document.getElementById("numEntrada").value;
    var precio= num*12;
    frm.precio.value=precio;
})

