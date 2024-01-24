 /*if (localStorage.getItem("logged") === "true") {
      window.location.href = "/map.html";
    }*/

    const credenciales = {
        email: "estudiante@guayerd.com",
        password: "123456",
      };
  
      let form = document.querySelector("form");

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        let userEmail = form.elements.email.value;
        let userPassword = form.elements.password.value;
        
        if (userEmail === credenciales.email &&
          userPassword === credenciales.password
        ) {
          localStorage.setItem("logged", "true");
          window.location.href = "/map.html";
        } else {
          alert("Credenciales inválidas");
        }
      })  