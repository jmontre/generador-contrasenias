// Se debe generar contraseñas a partir de lo que indique el usuario


function obtenerLargo() {
    let contrasenia = []
    let numero = parseInt(document.getElementById('cantidad').value);
    let caracteres = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')'];
    let random = Math.floor((Math.random()*72))
    for (let i = 0; numero >= i; i++) {
        random = Math.floor((Math.random()*72))
        contrasenia += caracteres[random]
        if (contrasenia.length == numero) {
            let pass = document.getElementById('contrasena');
            pass.value = contrasenia;
            return;
        }
        
    }
}

function limpiar() {
    let pass = document.getElementById('contrasena');
    let cant = document.getElementById('cantidad');
    cant.value = '';
    pass.value = '';
    return;
}





