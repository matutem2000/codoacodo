function validateForm() {
    let x = document.forms["formu"]["fname"].value;
    let y = document.forms["formu"]["pclave"].value;
    
    let z = x.indexOf('@');
    console.log(z);
    if (z == false || y == ""){
      alert("Debe completar el usuario con un @ de por medio. Recuerde no dejar en blanco la clave");
      return false;
    }
   
} 

