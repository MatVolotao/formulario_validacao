const entrada_forms = document.querySelectorAll(".formulario");
const button_enviar = document.getElementById("enviar");
// console.log(entrada_forms)
// console.log(button_enviar)

button_enviar.addEventListener("click", function () {
	entrada_forms.forEach(function (item) {
        if (item.classList.contains("borda-padrao")) {
            item.classList.remove("borda-padrao");
        }
		if (item.value.trim() === "") {
            if (item.classList.contains("campo-preenchido")) {
                item.classList.remove("campo-preenchido");
            } 
			item.classList.add("campo-vazio"); 
		} else {
			item.classList.remove("campo-vazio"); 
			item.classList.add("campo-preenchido"); 
            
		}
	});
});

