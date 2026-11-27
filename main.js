//const addloginText = document.getElementById("login");

//const addloginText = document.querySelector('#login');
//const addemailText = document.querySelector('#email'); 

//addemailText.innerText = "メール";
//addloginText.innerText = "ログイン" ;

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const button = document.querySelector("#button");


/* Verificar se o campo está vazio ou não */

button.addEventListener("click", function(event){
	
	if(emailInput.value === "" || passwordInput.value ===""){
		alert(("Por favor preencha campos vazios"));
		return;
	}
});

