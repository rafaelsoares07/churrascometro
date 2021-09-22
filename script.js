let inputHomens = document.getElementById('homens')
let inputCriancas = document.getElementById('criancas')
let inputMulheres = document.getElementById('mulheres')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById("resultado")


function calcular (){
	console.log("Calculando....")

	
	
	let homens = parseInt(inputHomens.value);
	let mulheres = parseInt(inputMulheres.value);
	let criancas = inputCriancas.value;
	let duracao = inputDuracao.value;


	let qdtTotalCarne = carneH() * homens + (carneM()/2*criancas) +carneM() *mulheres;
	let qdtTotalBebida = bebida() * homens + (bebida()/2*criancas) +bebida() *mulheres;

	resultado.innerHTML = `<h2 id="lista_de_compras" >Lista de Compras Para o Churras:</h2>`
	resultado.innerHTML += `<p class="quantidades">${qdtTotalCarne/1000} Kg de Carne <img class="icons" src="carne.png"> </p>`
	resultado.innerHTML += `<p class="quantidades">${qdtTotalBebida/1000} Litros de Bebidas <img class="icons" src="garrafa.png"></p>`

	


	function carneH(){
		if(duracao>5){
			return 700;
		}
		else{
			return 400;
		}
	}

	function carneM(){
		if(duracao>5){
			return 500;
		}
		else{
			return 300;
		}

	}

	function bebida(){
		if(duracao>5){
			return 2000;
		}
		else{
			return 1200;
		}

	}

	console.log(qdtTotalCarne)
	console.log(qdtTotalBebida)


}