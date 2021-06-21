window.onload = () => {
  const registerBtn = document.querySelector(".register-btn");

  registerBtn.addEventListener("click", () => {
    // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
    // 1. Obtenemos el valor ingresado en el input de email
    var email = document.getElementById("email-input").value;
    console.log(email);
    // 2. Obtenemos los datos ingresados en el input de password
    var password = document.getElementById("password-input").value;
    console.log(password);
    // 3. Obtenemos el valor del input radio
    var mayorDeEdad = document.getElementsByName("legalAge");
    
    // 4. Obtenemos el valor del input checkbox
    var terminos = document.getElementsByName("termsAndConditions");
    
    // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
    // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
    mayorDeEdad.forEach(function(elemento){
      console.log(`Elemento: ${elemento.value}`)
      console.log(`Seleccionado: ${elemento.checked}`);
      if(`${elemento.value}` == 'true' && (`${elemento.checked}` == 'false')){
        console.log("Debes ser mayor de edad para registrarte en el sitio");
        alert("Debes ser mayor de edad para registrarte en el sitio");              
      }          
    });

    // 6 Validamos si el usuario aceptó los términos y condiciones. Si no, mostramos
    // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
    terminos.forEach(function(elemento){
      console.log(`Elemento: ${elemento.value}`);
      console.log(`Seleccionado: ${elemento.checked}`);
      if(`${elemento.checked}` == 'false'){
        alert("Debes aceptar los TyCs para registrarte en el sitio");
      }
    })
    // 7 Si todo esta correcto, mostramos por consola un objeto con la información
    // ingresada por el usuario.
    let edad = function() {
      let mayor = true;
      mayorDeEdad.forEach(function(elemento){
        if(`${elemento.value}` == 'true' && (`${elemento.checked}` == 'false')){
          mayor == false              
        }          
      })  
      return mayor;           
    };

    let terms = function() {
      let aceptacion = true;
      terminos.forEach(function(elemento){
        if(`${elemento.checked}` == 'false'){
          aceptacion = false;
        }
      })
      return aceptacion;
    }  

    var usuario = {
      correoElectronico: email,
      contrasena: password,
      legalAge: edad(),
      tycAccepted: terms(),      
    }
    console.log(usuario);
  });
}
