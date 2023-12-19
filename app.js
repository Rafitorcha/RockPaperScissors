let parra = document.querySelector('.uno')
		let maquina = Math.ceil(Math.random() * (3 - 0))

document.addEventListener('click', (e) => {

	if(e.target.matches('.armas .roc')){
	 valor = 1
	mostrar()
	}

if(e.target.matches('.armas .pa')){
	 valor = 2
	mostrar()
	}

if(e.target.matches('.armas .scs')){
	 valor = 3
	mostrar()
	}

	if(e.target.id === "cambiar"){
		change()
	}
}
	)

const change = () => {
	let llamar = prompt('1: para usar que los items sean objetos 2: para que sean manos')
	if (llamar == 2){
		document.querySelector('.roc').src="handR.png"
	document.querySelector('.pa').src="handP.png"
	document.querySelector('.scs').src="handS.png"
	} else {
		document.querySelector('.roc').src="rock.png"
	document.querySelector('.pa').src="paper.png"
	document.querySelector('.scs').src="scissor.png"
	}


}

const mostrar = () => {

	if (valor === maquina){
	parra.textContent = 'de nuevo'
} else if(valor === 1 && maquina === 3){
		parra.textContent = 'ganador'
	} else if(valor === 2 && maquina === 1){
	parra.textContent = 'ganador'
		}
		else if(valor === 3 && maquina === 2){
			parra.textContent = 'ganador'
		}
		else {
			parra.textContent = 'perdedor'
			console.log(maquina)

		}
}