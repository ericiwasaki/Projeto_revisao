const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const dateinput = document.querySelector("#date");
const veriSenhainput = document.querySelector("#veriSenha");
const telinput = document.querySelector("#tel");

const submitinput = document.querySelector("#enviar");

const nameValue = nameInput.value;
const emailValue = emailInput.value;
const passwordValue = passwordInput.value;


/* Validar a senha */
submitinput.addEventListener("click",(events)=>{

	if(passwordInput.value.length < 6){
		alert("Colocar pelo menos 6 digitos!");
		return;
	}else if(veriSenhainput.value !== passwordInput.value){
		alert("A senha está diferente,verifique a senha");
		return
	}
});